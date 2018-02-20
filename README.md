# ferp

Short for frontend rapid prototyping

### Prerequisites

Node js v8.9.3 and packagae manager npm 5.5.1 or yarn

### Installing

```
npm install
```

development

```
npm run dev
```

production

```
npm run deploy
```


## Running the tests

```
npm run test
```

### And coding style 

We use eslint 

```
npm run fix
```

## Deployment

use [now](https://zeit.co/now)

```
now
```

## Built With

* [Next js](https://github.com/zeit/next.js/) react ssr framework
* [React Semantic UI](https://react.semantic-ui.com/) - UI kit

TODO
* [ ] Create form component example
* [ ] Create simple form validating
* [ ] Management state
* [ ] Make some optimize UI

## The Story Behind
This project is my personal opinion for frontend rapid prototyping. Frontend development technology evolves so fast and
sometime make me confuse, some people call it [frontend/javascript fatigue](https://www.smashingmagazine.com/2016/11/not-an-imposter-fighting-front-end-fatigue/).
For choosing some tech stack I must think about trade-off some like productivity, maintainable, etc. My priority for this project
is productivity because the business needs so fast >.<.

## CRA vs Next js
I choose next js because is handle server rendering. Even though next js is 'Framework' we can still use webpack/parcel and the other customize package

## Styletron vs React Semantic
For ui kit I choose react semantic, I have been use styletron for my gatsby project and I like it, but I think for productivity react semantic still better

## Redux vs Mobx or maybe Apollo Client ??
Honestly in this project still don't use management state, for simplify I think mobx is good, but for debugging redux 
ftw. I interest in apollo client u can read this [the future of state management](https://dev-blog.apollodata.com/the-future-of-state-management-dd410864cae2).
If I choose apollo maybe I will use [prisma](https://www.prismagraphql.com/) as graphql server

## Testing
Honestly is my first time use unit testing for react project :trollface:, and for testing I choose jest + airbnb's enzyme

## Styling and Programming paradigm
I prefer functional and more declarative way thats why I choose ramda, but I still don't check the size for this project :trollface:.

## Project Folder and File Structure

* pages the convention from next js to make component as main routes
* components as reusable component
* constants as constants and some site configuration for temporary
* `__TESTS__` as folder that contain testing
