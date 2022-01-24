const jobOfferingsTestData = [
  {
    id: "jobOffering-1",
    title: "Senior Backend Dev",
    location: "Stockholm",
    publishDate: "2021-11-05",
    applyDate: "2022-04-16",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=1",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-1', 'candidate-2', 'candidate-3', ],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: ['candidate-4'],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-2",
    title: "HR-genaralist",
    location: "Stockholm",
    publishDate: "2021-11-07",
    applyDate: "2022-03-16",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=2",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-5', 'candidate-6', 'candidate-7', 'candidate-8'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: ['candidate-4'],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-3",
    title: "Full-stack developer",
    location: "Stockholm",
    publishDate: "2021-11-09",
    applyDate: "2022-05-16",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=3",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-1', 'candidate-2', 'candidate-5', 'candidate-6'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-4",
    title: "Frontend designer",
    location: "Stockholm",
    publishDate: "2021-11-11",
    applyDate: "2022-02-16",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=4",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-7', 'candidate-8', 'candidate-6'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: ['candidate-3', 'candidate-4'],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-5",
    title: "Junior System developer",
    location: "Stockholm",
    publishDate: "2021-11-15",
    applyDate: "2022-04-25",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=5",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-1', 'candidate-2', 'candidate-3', 'candidate-4','candidate-5', 'candidate-6', 'candidate-7', 'candidate-8'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-6",
    title: "Junior System developer",
    location: "Stockholm",
    publishDate: "2021-11-20",
    applyDate: "2022-03-16",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=6",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-1', 'candidate-2', 'candidate-3', 'candidate-4'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-7",
    title: "Junior System developer",
    location: "Stockholm",
    publishDate: "2021-11-20",
    applyDate: "2022-04-16",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=7",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-1', 'candidate-2', 'candidate-3', 'candidate-4'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
  {
    id: "jobOffering-8",
    title: "Junior System developer",
    location: "Stockholm",
    publishDate: "2021-11-20",
    applyDate: "2022-04-22",
    preview: "Vad kan vi erbjuda dig och din karriär för att du skulle vilja börja hos oss? Tycker du att det är jätteroligt med Java-utveckling, att lära dig nya tekniker och att ta en fika med kollegor? Vi på LogoPicsum har fantastiska möjligheter och hjälper dig att få den framtid du vill ha.",
    companyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus non ligula in ultricies. Quisque placerat ligula in blandit interdum. In sollicitudin quam in sem viverra fringilla. In malesuada metus at leo maximus, laoreet molestie dui sagittis. Ut eget facilisis urna. Ut dignissim venenatis scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquet sit amet augue non iaculis. Proin dapibus at sem sed fringilla. Pellentesque vel rutrum turpis, sed vehicula magna. In vel est ac ex eleifend cursus. Phasellus ut eleifend arcu. Morbi id ante non erat pulvinar hendrerit a a massa. Quisque.",
    aboutRole: "nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut",
    imageUrl:"https://picsum.photos/250?random=8",
    competencies:[
      {id:"competence-1", name: "Java", years: 3},
      {id:"competence-2", name: "Javascript", years: 1},
      {id:"competence-3", name: "CSS", years: 2},
      {id:"competence-4", name: "C", years: 2},
      {id:"competence-5", name: "HTML", years: 2},
    ],
    recruitmentSteps: [
      {
        id: 'recruitmentStep-1',
        title: 'Applied',
        candidateIds: ['candidate-1', 'candidate-2', 'candidate-3', 'candidate-4'],
        },
        {
          id: 'recruitmentStep-2',
          title: 'Interesting',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-3',
          title: 'Interview',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-4',
          title: 'Hire',
          candidateIds: [],
        },
        {
          id: 'recruitmentStep-5',
          title: 'Dismiss',
          candidateIds: [],
        }
    ],
  },
];

export default jobOfferingsTestData;