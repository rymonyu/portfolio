const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Rymon Yu',
    site_url: 'https://yoursite.com',
    feed_url: 'https://yoursite.com/feed.xml'
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
