/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import FontColorUI from './../../src/fontcolor/fontcolorui';
import ColorUI from './../../src/ui/colorui';

describe( 'FontColorUI', () => {
	it( 'is ColorUI', () => {
		expect( FontColorUI.prototype ).to.be.instanceOf( ColorUI );
	} );
} );
