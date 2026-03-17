# Where is my fossil?
[![Github All Releases](https://img.shields.io/github/downloads/MiguelDLM/Where-is-my-fossil/total.svg)]()
[![GitHub release](https://img.shields.io/github/release/MiguelDLM/Where-is-my-fossil.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/MiguelDLM/Where-is-my-fossil.svg)]()
[![GitHub pull requests](https://img.shields.io/github/issues-pr/MiguelDLM/Where-is-my-fossil.svg)]()
[![GitHub license](https://img.shields.io/github/license/MiguelDLM/Where-is-my-fossil.svg)]()
[![Flutter](https://img.shields.io/badge/Flutter-3.38.3-blue.svg)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.10.1-blue.svg)](https://dart.dev)
[![Firebase Core](https://img.shields.io/badge/Firebase%20Core-3.15.2-blue.svg)](https://pub.dev/packages/firebase_core)
[![Firebase Auth](https://img.shields.io/badge/Firebase%20Auth-5.7.0-blue.svg)](https://pub.dev/packages/firebase_auth)
[![Firebase Firestore](https://img.shields.io/badge/Firebase%20Firestore-5.6.12-blue.svg)](https://pub.dev/packages/cloud_firestore)
[![Firebase Analytics](https://img.shields.io/badge/Firebase%20Analytics-11.6.0-blue.svg)](https://pub.dev/packages/firebase_analytics)
[![Firebase Crashlytics](https://img.shields.io/badge/Firebase%20Crashlytics-4.3.10-blue.svg)](https://pub.dev/packages/firebase_crashlytics)
[![Firebase Messaging](https://img.shields.io/badge/Firebase%20Messaging-15.2.10-blue.svg)](https://pub.dev/packages/firebase_messaging)
[![Google Sign In](https://img.shields.io/badge/Google%20Sign%20In-6.3.0-blue.svg)](https://pub.dev/packages/google_sign_in)
[![Google Mobile Ads](https://img.shields.io/badge/Google%20Mobile%20Ads-5.3.1-blue.svg)](https://pub.dev/packages/google_mobile_ads)



This is a simple app that allows you to find the location of a fossil in the world. You can use the map to find the location of the fossil according to the records of different databases.

## Source of data

The app is connected to different databases, grouped by the type of information they provide:

### Fossil Occurrence Data
| Database | Data Provided | Status | More Info |
|----------|---------------|--------|-----------|
| ![Paleobiology DB](https://img.shields.io/badge/PBDB-Fossil%20Occurrences-orange) | Fossil occurrences worldwide | ✅ Active | [Visit](https://paleobiodb.org/) |

### Taxonomic Information
| Database | Data Provided | Status | More Info |
|----------|---------------|--------|-----------|
| ![Open Tree of Life](https://img.shields.io/badge/OToL-Taxonomic%20Info-green) | Taxonomic information | ✅ Added in beta 0.2 | [Visit](https://tree.opentreeoflife.org/) |

### Images and Visual Resources
| Database | Data Provided | Status | More Info |
|----------|---------------|--------|-----------|
| ![iDigBio](https://img.shields.io/badge/iDigBio-Fossil%20Images-yellow) | Images of fossils | ✅ Active | [Visit](https://www.idigbio.org/) |
| ![Phylopic](https://img.shields.io/badge/Phylopic-Silhouettes-yellow) | Silhouettes of species | ✅ Active | [Visit](http://phylopic.org/api/) |
| ![NHM Data Portal](https://img.shields.io/badge/NHM-Species%20Images-yellow) | Images of species | 🐛 Bug due changes in API | [Visit](https://data.nhm.ac.uk/) |


### 3D Models
| Database | Data Provided | Status | More Info |
|----------|---------------|--------|-----------|
| ![Morphosource](https://img.shields.io/badge/Morphosource-3D%20Models-blue) | 3D models of fossils | ✅ Added in beta 0.3 | [Visit](https://www.morphosource.org/) |
| ![Sketchfab](https://img.shields.io/badge/Sketchfab-3D%20Models-blue) | 3D models of species | ✅ Added in beta 0.3 | [Visit](https://sketchfab.com/) |
| ![Phenome10k](https://img.shields.io/badge/Phenome10k-Species%20Images-yellow) | 3D models of species  | ✅ Added in beta 0.3 | [Visit](https://phenome10k.org/) |


## ✨ Features

### 🔍 Search & Discovery
- **Search by taxon name** - Find any fossil species in the database
- **Worldwide location** - See where fossils were discovered globally
- **Species information** - Get detailed taxonomic and biological data
- **Visual resources** - Access images and silhouettes of species
- **3D models** - Explore three-dimensional fossil models
- **Gemini AI Integration** - AI-powered fossil assistance for summarizing searchs *(New in v2.0.0)*
- **Paleodex** - Comprehensive catalog for tracking and learning about species *(New in v2.0.0)*

### 📊 Data Visualization & Maps
- **Interactive world map** - Plot fossil locations geographically
- **Paleomaps & Coordinates** - View species distribution on ancient maps with GPlates integration
- **Occurrence distribution** - See where species were most common
- **New Chronochart** - Precision charts based on GTS2020
- **Phylogenetic trees** - Create phylogenetic trees using Open Tree of Life API

### 👥 My Records & Data Management
- **Redesigned My Records** - All-new gallery view with search, filtering, and sorting
- **Multi-photo Support** - Add multiple photos to your records with a gallery carousel
- **Full-screen Viewer** - Detailed view with pinch-to-zoom for fossil photos
- **Specify Export** - Export your findings directly to Specify-compatible formats

### 🏛️ Local Resources
- **Museum finder** - Discover natural history museums near you
- **Researcher network** - Connect with paleontologists in your area

## 🚀 Future Developments and ideas

| Feature | Description | Status |
|---------|-------------|--------|
| ~~Museums Database~~ | ~~Database of museums and collections worldwide~~ | ✅ **Implemented** in beta 0.2 |
| ~~Researcher Database~~ | ~~Network of participating researchers~~ | ✅ **Implemented** in beta 0.2 |
| Extinction Rate Visualization | Data visualization showing extinction events | 🔜 Coming soon |
| Paleogeographic Distribution | View species distribution on ancient maps | 🔜 Coming soon |

## 👥 Community Structure

### 🧑‍💻 Regular Users
- Search for species and explore fossil data
- View species information, images, and 3D models
- Track personal fossil discoveries
- Access and suggest paleontology events

### 🔬 Researchers
- All regular user capabilities
- Create paleontology events
- Access fossil records from all users *(coming soon)*

### 🛡️ Moderators
- All researcher capabilities
- Accept/reject user event suggestions *(added in beta 0.2)*
- Access user fossil records *(coming soon)*
- Approve/reject researcher profiles *(added in beta 0.2)*

### ⚙️ Administrators
- Full access to all app features and management tools

## ⚠️ Known Issues

| Issue | Status | Details |
|-------|--------|---------|
| Performance limitations | 🟠 Active | Searches for high taxonomic ranks (e.g., "Animalia") without filters may be slow |
| Age range plot labels | 🟠 Active | Double taxon name labels appear on each bar |
| ~~Plot zoom functionality~~ | ✅ Fixed  | Fixed in v2.0.0 |
| ~~Translation incomplete~~ | ✅ Fixed | ~~Some parts remain in English~~ *(Fixed in release 1.0)* |
| ~~Back button navigation~~ | ✅ Fixed | ~~Sometimes returns to login page~~ *(Fixed in beta 0.3)* |
| ~~Admin panel display~~ | ✅ Fixed | ~~Not all columns visible in portrait mode~~ *(Fixed in beta 0.2)* |
| Profile image display | 🟠 Active | Profile images occasionally fail to load (especially during frequent API requests) |

## 📱 Releases

This repository serves as the official release channel for the app. The current stable version is **v2.0.0**.

### What's New since v1.4.0
- **v2.0.0**: 
    - **Gemini AI**: Integrated AI for fossil analysis.
    - **Paleodex**: New species catalog.
    - **Specify Export**: Export my records in CSV format. Perfect for Specify databases
    - **My Records Gallery**: Complete redesign of find management.
    - **Chronochart GTS2020**: Most accurate and rich geological time charting.
    - **Multi-photo support**: Add and view multiple images per fossil.
- **v1.6.x**: 
    - **Paleomaps**: Dynamic ancient continent distribution visualization using Gplates API.
    - **FCM integration**: Robust notification support.
    - **UI/UX Polishing**: Various stability and localization fixes.

For the most stable experience, we recommend downloading the app from the Play Store.

## 💰 About Ads

The app includes advertisements to support ongoing development and maintenance costs. While many data sources (Paleobiology Database, Phylopic, iDigBio) are free to access, we incur expenses maintaining user databases, event listings, and researcher profiles.

The initial version may contain more ads than ideal, but we plan to optimize the ad experience based on user feedback and app popularity. As our user base grows, so do our API request costs, which is why we've included advertising from the beginning.

We regularly analyze user behavior (anonymously) to improve both the app and ad experience.

## 🐛 Bug Reports

Found a bug? Please report it in the [Issues](https://github.com/MiguelDLM/Where-is-my-fossil/issues) section of this repository with:

- A clear description of the problem
- Steps to reproduce the issue
- Your device model and operating system
- Screenshots if applicable

## 💡 Feature Requests

Have an idea for a new feature? Create an [Issue](https://github.com/MiguelDLM/Where-is-my-fossil/issues) with:

- A detailed description of the feature
- How it would benefit users
- Any reference examples from other apps
