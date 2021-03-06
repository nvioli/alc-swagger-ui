import React from 'react'

const Topbar = () => {
  const { ArcNav } = window
  return window.ArcNav ? (
    <ArcNav
      appname='Arc Learning Center'
      homeLink='/alc'
      links={[
        {
          "name": "Arc Answers",
          "href": "/alc/answers/",
          "text": {
            "en": "Arc Answers"
          }
        },
        {
          "name": "Release Notes",
          "href": "/alc/release-notes",
          "text": {
            "en": "Release Notes"
          }
        },
        {
          "name": "Support",
          "href": "https://arcpublishing.atlassian.net/servicedesk",
          "text": {
            "en": "Support"
          }
        },
        {
          "name": "Ideas",
          "href": "https://ideas.arcpublishing.com/",
          "text": {
            "en": "Ideas"
          }
        }
      ]}
    />
  ) : null
}

export default Topbar

