export type DesignMetadataType = {
  designTitle: string
  prototypeLink: string
  presentationLink: string
  imageFileName?: string
  caseStudy?: string
  caseStudyIsLink?: boolean
  githubLink?: string
  demoLink?: string
}

export const DESIGN_METADATA: Record<string, DesignMetadataType> = {
  homemates: {
    designTitle: 'Homemates',
    imageFileName: 'homemates.webp',
    prototypeLink:
      'https://www.figma.com/file/SiCr4yrw7WhOUSBh3RhHIm/Homemates',
    presentationLink:
      'https://www.figma.com/proto/SiCr4yrw7WhOUSBh3RhHIm/Homemates?node-id=1%3A38&viewport=-186%2C113%2C0.38197198510169983&scaling=scale-down',
    caseStudy: 'Yau Yen Ching_Case Study_Homemates.pdf',
  },
  gifter: {
    designTitle: 'Gifter',
    imageFileName: 'gifter.webp',
    prototypeLink: 'https://www.figma.com/file/RIeiFbqwmBOgpTVfYF5FVc/Gifter',
    presentationLink:
      'https://www.figma.com/proto/RIeiFbqwmBOgpTVfYF5FVc/Gifter?node-id=19-480&scaling=scale-down-width',
    caseStudy: 'https://gifterwebsite.wordpress.com/',
    caseStudyIsLink: true,
    demoLink: 'https://youtu.be/yTwfodhltKY?si=ut34AW7QTtlLKJDs',
  },
  w3schools: {
    designTitle: 'W3Schools Redesign',
    imageFileName: 'w3schools.webp',
    prototypeLink:
      'https://www.figma.com/file/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup',
    presentationLink:
      'https://www.figma.com/proto/T0LQIRS5dnq46NPDM6Zi28/W3Schools-Redesign-Mockup?node-id=1-2&viewport=372%2C62%2C0.22146402299404144&scaling=scale-down-width&starting-point-node-id=1%3A2',
    caseStudy: 'Yau Yen Ching_Case Study_W3Schools Redesign.pdf',
  },
  portfolio: {
    designTitle: 'Personal Portfolio',
    imageFileName: 'portfolio.webp',
    prototypeLink:
      'https://www.figma.com/file/BxtLbe77wnL79j2MCXd7v6/Personal-Portfolio',
    presentationLink:
      'https://www.figma.com/proto/BxtLbe77wnL79j2MCXd7v6/Personal-Portfolio?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2&hide-ui=1',
    githubLink: 'https://github.com/yauyenching/portfolio-site',
  },
}