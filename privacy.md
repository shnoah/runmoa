# RunMoa Privacy Policy

Last updated: June 18, 2026

Public web version: `https://shnoah.github.io/runmoa/privacy/`

## Overview

RunMoa is an iPhone app that reads running workouts from Apple Health and presents them in a runner-focused format.

RunMoa does not require account creation, advertising SDKs, or social tracking.

RunMoa does not upload Apple Health running data, workout routes, heart rate samples, run notes, or shoe data to a developer server.

RunMoa uses Firebase Analytics and Firebase Crashlytics to understand app usage and diagnose crashes in distributed TestFlight and App Store builds.

## Health Data We Read

When you allow Apple Health access, RunMoa may read:

- Running workouts
- Workout routes
- Heart rate
- Resting heart rate
- VO2 Max
- Distance walking/running
- Step count
- Workout effort when available on supported iOS/watchOS versions

RunMoa reads these items only to render summaries, running readiness, heart rate zones, detailed charts, personal record tracking, shoe assignment views, and sharing layouts on the iPhone.

## Data Stored On Device

RunMoa stores the following data locally on the iPhone:

- App settings
- Heart rate zone preferences
- Shoe names, models, mileage targets, display order, and shoe-to-run assignments
- Run notes you write
- First-card detail metric settings
- Personal record review results
- Derived summary and detail cache values such as average heart rate, average cadence, elevation gain, chart data, and heart rate zone profile cache

These local support files are stored in the app container with iOS file protection and the automatic iCloud/Finder backup exclusion flag set.

## Firebase Analytics and Crash Diagnostics

RunMoa uses Firebase Analytics and Firebase Crashlytics in distributed TestFlight and App Store builds. These services may collect usage data, crash reports, stack traces, device and operating system information, app version, and diagnostic metadata needed to monitor app stability and understand feature usage.

RunMoa does not attach Apple Health workout details, route coordinates, heart rate samples, run notes, shoe data, or user IDs to Firebase reports.

## Data Not Uploaded

RunMoa does not upload the following to a developer server:

- Apple Health running data
- Workout route coordinates
- Heart rate samples
- Pace or split history
- Run notes and shoe data
- Derived summary and detail cache values

## Data Sharing

RunMoa shares data externally only when you explicitly choose an export action.

Examples:

- Copying a generated PNG share image to the clipboard
- Exporting a generated PNG share image to Files through the document picker
- Sharing a personal backup JSON file yourself, containing only shoe data and display order, run-to-shoe assignments, run notes you wrote, and first-card detail metric settings

## Your Controls

You can:

- Revoke Apple Health access in `Settings > Health > Data Access & Devices > RunMoa`
- Delete shoe data from the in-app Settings screen
- Export or import a personal backup JSON file from the in-app Settings screen
- Clear derived analysis cache from the in-app Settings screen
- Delete the app to remove app-local data stored in the app container

## Contact

For RunMoa privacy questions, contact: `pnr.run.apps@gmail.com`
