# Where is my fossil?
[![Github All Releases](https://img.shields.io/github/downloads/MiguelDLM/Where-is-my-fossil/total.svg)]()

This is a simple app that allows you to find the location of a fossil in the world. You can use the map to find the location of the fossil according to the records of different databases.

## Source of data

The app is connected to different databases that provide information about extinct species. The APIs used are:

- [Paleobiology Database](https://paleobiodb.org/) For the fossil occurrences.
- [Phylopic](http://phylopic.org/api/) For the slilhouettes of the species.
- [iDigBio](https://www.idigbio.org/) For the images of the fossils.
- [Open Tree of Life](https://tree.opentreeoflife.org/) For the taxonomic information. (implemented in beta 0.2)
- [Morphosource](https://www.morphosource.org/) For the 3D models of the fossils. (implemented in beta 0.3)
- [Phenome10k](https://phenome10k.org/) For the images of the species. (implemented in beta 0.3)
- [Sketchfab](https://sketchfab.com/) For the 3D models of the species. (implemented in beta 0.3)
- [NHM Data Portal](https://data.nhm.ac.uk/) For the images of the species. (implemented in beta 0.3)

## Features

- Search for a species by taxon name.
- Find the location of the fossil in the world.
- Get information about the species.
- Get images of the species and the fossils.
- Get the silhouette of the species.
- Get the 3D model of the species. (implemented in beta 0.3)
- Data visualization including:
    - Map of the world with the location of the fossil.
    - Occurrences of the species in the world.
    - Age distribution of the species.
    - Taxonomic diversity of the species.
- Keep a record of fossils found by the user.
- Access to events related to paleontology such as conferences, courses, and workshops.
- Creation de events related to paleontology.
- Creation of phylogenetic trees of taxa (implemented in beta 0.2)
- Find museums near you.
- Find researchers near you.

## Future developments

New features will be added to the app in the future. Some of the features are partially implemented and will be available soon:

- ~~Database of Museums and collections (Database created but not implemented).~~ (Implemented in beta 0.2)
- ~~Database of researchers (Database will be created as soon as researchers are interested in participating).~~ (Implemented in beta 0.2)
- More diversity in the data visualization:
    - Extinction rates.
    - Distribution of the species in the world using paleogeography.

## Structure of the community

The community is organized in different groups according to users' profiles:

- Regular users:
    - Can search for species.
    - Can find the location of the fossil.
    - Can get information about the species.
    - Can get images of the species and the fossils.
    - Can keep a record of fossils found by the user.
    - Can access events related to paleontology.
    - Can suggest/create events related to paleontology.

- Researchers:
    - Can search for species.
    - Can find the location of the fossil.
    - Can get information about the species.
    - Can get images of the species and the fossils.
    - Can keep a record of fossils found.
    - Can access events related to paleontology.
    - Can suggest/create events related to paleontology.
    - Can access the fossil records of all users (not available yet)

- Moderators:
    - Can search for species.
    - Can find the location of the fossil.
    - Can get information about the species.
    - Can get images of the species and the fossils.
    - Can keep a record of fossils found.
    - Can access events related to paleontology.
    - Can suggest/create events related to paleontology.
    - Can accept/reject events suggested by users (implemented in beta 0.2)
    - Can access the fossil records of all users (not available yet).
    - Can approve/reject the profiles of researchers (implemented in beta 0.2)

- Administrators:
    -Full access to the app.

## Known issues 

Since the app is in development, there are some issues that need to be fixed:

- The app can be slow when searching for species if the database is too large (i.e. high taxonomic ranks such as "Animalia" are requested without applying filters).
- The age range plot shows double label (taxon name) for each bar 
- Zoom options on plots only work on the age range plot.
- The app is not fully translated, some parts are still in English.
- ~~Press the "back" button sometimes leads the user to the login page.~~ (Fixed in beta 0.3)
- ~~The admin panel for moderators is overloaded and not all the columns are visible unless the user rotates the screen.~~ (Fixed in beta 0.2)
- The users' profile image is not displayed sometimes (specially if many requests are made, maybe only present while developing).

## Releases

This repository will be the official release channel for the app. The app will be (eventually) available for Android in the Play Store, however, this repository will cointain the most recent version of the app including the beta versions. For this reason, the app may contain bugs that will be fixed in the next release. If you are interested in testing the stable version of the app, please wait for the official release in the Play Store.

## About the ads and publicity

The app cointains ads that help to maintain the app. Regardless sources such as the Paleobiology Database, Phylopic, and iDigBio are free to use, the app requires a service to mainain the users/events/profiles databases. The initial version may look overloaded with ads, however, the app will be updated to reduce the number of ads and improve the user experience depending on the feedback of the users and the popularity of the app. A higher number of users will require many requests to the databases and this potentially will increase the cost of the service. For this reason we decide to be safe and include ads from the beginning. The users behavior will be monitored to improve the app and the ads will be adjusted according to the users' preferences.

## Bug report
