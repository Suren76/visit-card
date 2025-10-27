<template>
  <div>
    <!-- CTA buttons -->
    <div class="px-5 pb-6">
      <div class="flex gap-3">
        <button @click="downloadVCard" class="flex-1 py-3 rounded-xl bg-[#0f2b24] text-white font-medium shadow hover:opacity-95">
          Save to Contacts
        </button>
        <button @click="showAbout = true" class="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center" title="About">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0f2b24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </button>
      </div>

      <div class="mt-3 flex gap-3">
        <button @click="generateDraftEmail" class="flex-1 py-2 rounded-lg bg-green-50 text-[#0f2b24] font-medium border border-transparent hover:bg-green-100">
          Draft Email
        </button>
        <button @click="shareCard" class="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center" title="Share">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#0f2b24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
            <path d="M16 6l-4-4-4 4" />
            <path d="M12 2v14" />
          </svg>
        </button>
      </div>
    </div>

    <!-- About section -->
    <div v-if="showAbout" class="px-5 pb-6 border-t border-gray-100 bg-white">
      <div class="py-4">
        <div class="flex items-start justify-between">
          <div>
            <h3 class="text-sm font-semibold brand-dark">About ENVO</h3>
            <p class="mt-2 text-sm text-gray-600">{{ aboutText }}</p>
          </div>
          <button @click="showAbout = false" class="text-gray-400 hover:text-gray-600 p-2">
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Draft Email section -->
    <div v-if="draftEmailVisible" class="px-5 pb-6 border-t border-gray-100 bg-white">
      <div class="py-4">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <h3 class="text-sm font-semibold brand-dark">Draft Email</h3>
            <textarea v-model="draftEmail" rows="6" class="mt-2 w-full p-3 border rounded text-sm text-gray-700"></textarea>
            <div class="flex gap-2 mt-3">
              <button @click="openMailClient" class="flex-1 py-2 rounded-lg bg-[#0f2b24] text-white text-sm font-medium">Open Mail Client</button>
              <button @click="copyDraft" class="py-2 px-3 rounded-lg bg-gray-50 text-sm border">Copy</button>
            </div>
          </div>
          <button @click="draftEmailVisible = false" class="text-gray-400 hover:text-gray-600 p-2">
            ✕
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  contact: {
    type: Object,
    required: true
  },
  aboutText: {
    type: String,
    required: true
  }
});

const showAbout = ref(false);
const draftEmailVisible = ref(false);
const draftEmail = ref('');

const generateDraftEmail = () => {
  const { name, title, company, email } = props.contact;
  draftEmail.value = `Subject: Great to connect — next steps\n\nHello [First Name],\n\nIt was a pleasure meeting you recently. I'm ${name}, ${title} at ${company}. I appreciated our conversation about potential collaborations in the sustainable energy space and would love to explore how we might work together.\n\nSuggested next steps:\n1) A short 30-min call to align on priorities\n2) Share a one-page summary of our capabilities\n\nWould you be available for a call next week? I can be reached at ${props.contact.phoneRaw} or ${email}.\n\nBest regards,\n${name}\n${title} — ${company}\n${props.contact.website}`;
  draftEmailVisible.value = true;
  showAbout.value = false;
};

const downloadVCard = () => {
  const c = props.contact;
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${c.name}`,
    `N:${c.name.split(' ').slice(-1).join(' ')};${c.name.split(' ').slice(0,-1).join(' ')}`,
    `ORG:${c.company}`,
    `TITLE:${c.title}`,
    `TEL;TYPE=WORK,VOICE:${c.phoneRaw}`,
    `EMAIL;TYPE=WORK:${c.email}`,
    `ADR;TYPE=WORK:;;${c.address};;;;`,
    `URL:${c.website}`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([lines], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${c.name.replace(/\s+/g,'_')}.vcf`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 200);
};

const openMailClient = () => {
  const subject = encodeURIComponent(draftEmail.value.split('\n')[0].replace(/^Subject:\s*/i, '') || 'Follow up');
  const body = encodeURIComponent(draftEmail.value.replace(/^Subject:.*\n/, ''));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};

const copyDraft = () => {
  navigator.clipboard?.writeText(draftEmail.value).then(() => {
    alert('Draft copied to clipboard');
  }).catch(() => {
    alert('Could not copy — please select and copy manually.');
  });
};

const shareCard = () => {
  const shareData = {
    title: `${props.contact.name} — ${props.contact.company}`,
    text: `Connect with ${props.contact.name} at ${props.contact.company}`,
    url: props.contact.website
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {/* user canceled or not supported */});
  } else {
    navigator.clipboard?.writeText(props.contact.website).then(() => {
      alert('Profile URL copied to clipboard');
    }).catch(() => {
      alert(props.contact.website);
    });
  }
};
</script>
