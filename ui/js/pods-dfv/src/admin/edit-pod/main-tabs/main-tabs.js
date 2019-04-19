/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import { STORE_KEY, tabNames } from 'pods-dfv/src/admin/edit-pod/store/constants';

// noinspection JSUnresolvedVariable
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

export const MainTabs = compose( [
	withSelect( ( select ) => {
		return {
			activeTab: select( STORE_KEY ).getActiveTab()
		};
	} ),
	withDispatch( ( dispatch ) => {
		return {
			setActiveTab: dispatch( STORE_KEY ).setActiveTab
		};
	} )
] )
( ( props )  => {
	const getClassName = ( tabName ) => {
		return classNames(
			'nav-tab pods-nav-tab-link',
			{ 'nav-tab-active': ( tabName === props.activeTab ) }
		);
	};

	const handleClick = ( e, tabName ) => {
		e.preventDefault();
		props.setActiveTab( tabName );
	};

	return (
		<h2 className='nav-tab-wrapper pods-nav-tabs'>
			{tabs.map( thisTab => (
				<a
					key={thisTab.tabName}
					href={thisTab.href}
					className={getClassName( thisTab.tabName )}
					onClick={( e ) => handleClick( e, thisTab.tabName )}>
					{thisTab.content}
				</a>
			) ) }
		</h2>
	);
} );

const tabs = [
	{
		tabName: tabNames.MANAGE_FIELDS,
		content: __( 'Manage Fields', 'pods' ),
		href: '#pods-manage-fields',
	},
	{
		tabName: tabNames.LABELS,
		content: __( 'Labels', 'pods' ),
		href: '#pods-labels',
	},
	{
		tabName: tabNames.ADMIN_UI,
		content: __( 'Admin UI', 'pods' ),
		href: '#pods-admin-ui',
	},
	{
		tabName: tabNames.ADVANCED_OPTIONS,
		content: __( 'Advanced Options', 'pods' ),
		href: '#pods-advanced'
	},
	{
		tabName: tabNames.AUTO_TEMPLATE_OPTIONS,
		content: __( 'Auto Template Options', 'pods' ),
		href: '#pods-pods-pfat'
	},
	{
		tabName: tabNames.REST_API,
		content: __( 'REST API', 'pods' ),
		href: '#pods-rest-api'
	},
];