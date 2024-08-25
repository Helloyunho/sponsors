import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  renderer: 'tiers',
  formats: ['svg', 'png'],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs
    },
    {
      title: 'Sponsors',
      preset: tierPresets.medium
    }
  ],
  outputDir: 'assets/'
})
