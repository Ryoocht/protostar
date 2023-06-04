import { Prisma } from '@prisma/client'

export const STUDENT_DATA: Prisma.StudentCreateInput[] = [
  {
    id: 'a3f7e9bf-60cc-4f3a-9e6a-09256a8153b1',
    user: {
      create: {
        appId: 72891539,
        email: 'jane-smith@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
        phoneNumber: '+1234567890',
        country: 'USA',
        firstLanguage: 'English',
        secondLanguage: 'French',
        avatar: 'https://example.com/avatar2.jpg',
        password: 'pQ@2nvR!f&4k',
      },
    },
    profile: {
      create: {
        id: 'bd7fb264-dfaa-43e9-88f1-2976c31c1de4',
        bio: 'Greetings! I am enthusiastic about diving into the world of programming. With an insatiable curiosity for technology and a strong desire to enhance my skill set, I am excited to embark on this journey through the Learning Programming Platform app. I firmly believe that coding holds the key to unlocking endless possibilities and solving real-world problems. Through this platform, I anticipate gaining a solid foundation in programming languages, exploring various coding concepts, and collaborating with like-minded individuals to fuel my growth as a programmer.',
        interestedCategories: {
          create: {
            category: {
              create: {
                id: '4dc9600a-b981-42ad-95c3-1b1e4597e9a2',
                name: 'Full-Stack Development',
              },
            },
          },
        },
        experienceSkillSets: {
          create: {
            id: '899964ce-09ff-4d34-87f5-3df72c47b169',
            title: 'HTML/CSS',
            experiencedPeriod: '1 year',
          },
        },
        desiredSkillSets: {
          create: {
            id: 'be4761d7-7b68-40fb-a929-15d6140e38b3',
            title: 'Ruby',
          },
        },
      },
    },
  },
  {
    id: '16c5e906-9569-4582-9765-78e5d587c411',
    user: {
      create: {
        appId: 28571492,
        email: 'david-johnson@example.com',
        firstName: 'David',
        lastName: 'Johnson',
        phoneNumber: '+447890123456',
        country: 'UK',
        firstLanguage: 'English',
        secondLanguage: 'German',
        avatar: 'https://example.com/avatar3.jpg',
        password: 'R7^#s8mQt2Lf',
      },
    },
    profile: {
      create: {
        id: '6bce3cb4-01f3-454b-8d59-4fca18f62aa3',
        bio: 'Greetings, fellow coders! I am thrilled to embark on a programming journey through the Learning Programming Platform app. Being a curious soul with a deep passion for technology, I see coding as the gateway to creating innovative solutions. With this platform, I hope to grasp the foundations of programming languages, dive into exciting projects, and learn from a vibrant community. Together, we can push boundaries and unleash our creative potential. I am particularly interested in backend development and look forward to honing my skills in languages like Java and exploring the intricacies of data structures.',
        interestedCategories: {
          create: {
            category: {
              create: {
                id: '53a4e6e6-1e1d-47e6-8f71-0c0b4cc7a602',
                name: 'Backend Software Development',
              },
            },
          },
        },
        experienceSkillSets: {
          create: {
            id: '26c343b6-183e-4eb7-8e1d-34b6a09a88b5',
            title: 'Java',
            experiencedPeriod: '9 months',
          },
        },
        desiredSkillSets: {
          create: {
            id: '3d349e8e-09fe-4dcf-aa7d-77a1ae5f48df',
            title: 'C#',
          },
        },
      },
    },
  },
  {
    id: '9c3f1f9d-0811-44d4-b9e2-493b24f3ab85',
    user: {
      create: {
        appId: 31948275,
        email: 'emily-wilson@example.com',
        firstName: 'Emily',
        lastName: 'Wilson',
        phoneNumber: '+91876543210',
        country: 'India',
        firstLanguage: 'English',
        secondLanguage: null,
        avatar: null,
        password: 'Jp5^#hq29Dc7',
      },
    },
    profile: {
      create: {
        id: '2daad10c-438e-4f1e-bb5f-8c9a9a249e68',
        bio: "Hello, fellow learners! It brings me immense joy to embark on the programming journey through the Learning Programming Platform app. As an aspiring programmer, I firmly believe that coding is the gateway to building innovative solutions and transforming ideas into reality. Through this platform, I aim to learn diverse programming languages, master web development, and enhance my problem-solving skills. The platform's interactive resources and supportive community will undoubtedly fuel my growth. Let's dive into the world of programming together and create wonders!",
        interestedCategories: {
          create: {
            category: {
              create: {
                id: 'ba35a01d-ba69-45b0-935e-d940717b14b2',
                name: 'Web Development',
              },
            },
          },
        },
        experienceSkillSets: {
          create: {
            id: '430c14e0-d678-45a6-9474-7d63e1c21db2',
            title: 'HTML/CSS',
            experiencedPeriod: '1 year',
          },
        },
        desiredSkillSets: {
          create: {
            id: '5908c70e-f0d9-4d4e-aae1-9e5be49629e5',
            title: 'JavaScript',
          },
        },
      },
    },
  },
  {
    id: '7be906ed-6c22-4a7a-b85d-4f5452a04025',
    user: {
      create: {
        appId: 67348924,
        email: 'michael-brown@example.com',
        firstName: 'Michael',
        lastName: 'Brown',
        phoneNumber: '+55123456789',
        country: 'Brazil',
        firstLanguage: 'Portuguese',
        secondLanguage: 'English',
        avatar: 'https://example.com/avatar4.jpg',
        password: 'm6s+G9D#zK35',
      },
    },
    profile: {
      create: {
        id: 'dc73bada-3e49-4ed5-bd48-23c3fcf0b8be',
        bio: 'Olá! I am excited to immerse myself in the world of programming through the Learning Programming Platform app. Como um entusiasta da tecnologia, acredito que a programação é a chave para a inovação e a criação de soluções impactantes. Desejo aprimorar minhas habilidades em desenvolvimento web, explorar frameworks populares e construir aplicações incríveis. Além disso, estou animado para colaborar com outros estudantes e aprender com suas experiências. Juntos, podemos desbravar o universo da programação e transformar nossos sonhos em realidade!',
        interestedCategories: {
          create: {
            category: {
              create: {
                id: '081c0e13-9e94-4122-9b7a-6ef6f8f0a0ff',
                name: 'Web Development',
              },
            },
          },
        },
        experienceSkillSets: {
          create: {
            id: 'e4f2d75c-6022-48c2-9d66-244ff8670b1e',
            title: 'HTML/CSS',
            experiencedPeriod: '1 ano',
          },
        },
        desiredSkillSets: {
          create: {
            id: '8b1c99c6-5d03-4ab5-88d6-2ef64917ffef',
            title: 'React',
          },
        },
      },
    },
  },
]
