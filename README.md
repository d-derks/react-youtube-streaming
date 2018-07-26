# React streaming youtube channel generator

This project is build by [Debbie Derks](https://github.com/d-derks) and [Alexander Farkas](https://github.com/aFarkas)

Debbie is responsible for creating the UI and Alex for the data structure.

## The Pattern

With this project we have created a react pattern that allows you pass on data through re-usable data-providers.

You can add your component into the ‘visual’ of the provider

Like a following example

	<PlaylistProvider
		playlistId={playlistId}
		visual={Playlist}
		totalItems={6}
	/>

## The structure

* This project is build component-based. Component are set to full width so adjusts to the size of its container.

* The webpage is made responsive to fit all screensizes. Also all media is made responsive to its container.

* Before data is loaded you will see placeholders first.

## The methology

The CSS metrology used is inspired by  SMACSS and BEM.

Every block component starts with b-component. Layout starts with l-layout.
When you go deeper into the component, the component starts with the component name, then added with ‘-‘ and a name. Like for example: component-inner. Variants start with is-variant.

The structure of CSS is always written from the outside to the inside. Example:

display: block;
padding: 0;
background: #fff;


I am very thankfull to boffinHouse for teaching me, with special thanks to [Alexander Farkas](https://github.com/aFarkas).

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

