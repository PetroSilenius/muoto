# [_muoto_](https://muoto.vercel.app) - Gradually work on your self-image

Have you ever felt uncomfortable in your own skin?

Body dysmorphia is a common disorder where a person perceives their appearance as flawed. It's recognised on two percentages of the population and it's most common among young adults.

> When you work on your body you see visual results, why can’t it be the same when you work on your mental health?

> _That’s why we built muoto_

## _muoto_ application

muoto helps you gradually work on your self-image through AI powered progress tracking. With muoto you see how your self-image progresses over time. Emotion tracking software has been gaining traction over the years but focuses mostly on depression and anxiety. We decided to improve on that concept by visualizing how body dysmorphia can distort your self image 🖼

muoto checks on you biweekly to ask you a few questions on how you’re feeling about yourself that day. Based on the gathered data it generates a descriptive image with Stable Diffusion 🤖

The image tries to visualize your subjective view of yourself and help you understand the difference between your perception and reality. The images are compared to the previously generated images so you can see how your self-image progresses over time ⏰

The progress is supported through an anonymous community where people can share their progress and react positively to others achievements 🏆

## Tech stack 🧑🏻‍💻

- Typescript, React 18 with server components, Next.js 13 with `app` directory
- Stable Diffusion for generating images
- Tailwind for styling
- PostgreSQL running in Aiven
- Vercel running static + serverless
- Next-auth with Google OAuth provider
- FigmJam for ideation

In [the FigJam board](https://www.figma.com/file/H66nDqEaomLcOmUuFqia8R/Junction---muoto?node-id=0%3A1) we created user flows, SWOT comparison about challenges etc

## Get started
### Prerequisites
- docker
- node
- yarn

The environment can run completely locally with the help of docker and node.

First things first. Start up that database.

```shell
docker compose up -d
```

This command will start a postgres database in detached mode on your computer.
Next step install dependencies, run migrations and seeders.

```shell
yarn
```

We setup a "postinstall" script that runs all needed migrations and seeders to get up and running.

Last thing start the Next.js application
```shell
yarn dev
```

## Future development 🔮

muoto has a lot of potential and we've gathered current ideas on the backlog in priorisation order
https://github.com/users/PetroSilenius/projects/1

### Main development items

- Add onboarding questions for new users to gather background data
- Implement community platform post sharing
- Review questions with body dismorphia experts

## Junction hackathon

_muoto_ was made by @petrosilenius and @dusanturajlic as part of the Junction 22 hackathon event. Junction 22 was the years biggest hackathon in Europe and gathered together 1300 participants. The challenge that inspired _muoto_ was created by Reaktor and details of it can be found [here](https://www.junction2022.com/challenges-new/reaktor)

[Hackathon pitch video](https://youtu.be/8337rJqO4Pg)
