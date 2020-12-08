/*
* DataloaderConfig.js
*
* Copyright (c) 2013, Sebastian Kruse. All rights reserved.
*
* This library is free software; you can redistribute it and/or
* modify it under the terms of the GNU Lesser General Public
* License as published by the Free Software Foundation; either
* version 3 of the License, or (at your option) any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* Lesser General Public License for more details.
*
* You should have received a copy of the GNU Lesser General Public
* License along with this library; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
* MA 02110-1301  USA
*/

/**
 * @class DataloaderConfig
 * Dataloader Configuration File
 * @author Sebastian Kruse (skruse@mpiwg-berlin.mpg.de)
 */
function DataloaderConfig(options) {

	var dl = 'https://geobrowser.de.dariah.eu/';

	this.options = {
		staticKML : [
		{ header: "" },
			{
				label: "Please choose file...",
				uri: ""
			},
			// {header: "header label"},
			// {label: "Johann Wolfgang von Goethe", url:"http://.../goethe.kml" },
		{ header: "ILC - Stadtbücher" },
			{
				label: "Stadtbuch Bände bis 1500",
				url: dl + "data/stadtbuch_baende-bis_1500.kml"
			},
			{
				label: "Stadtbuch Bände bis 1650",
				url: dl + "data/stadtbuch_baende-bis_1650.kml"
			},
			{
				label: "Stadtbuch Bände ab 1750",
				url: dl + "data/stadtbuch_baende-ab_1750.kml"
			},
			{
				label: "Stadtbuch Bände 1500 - 1650",
				url: dl + "data/stadtbuch_baende-1500_bis_1650.kml"
			},
			{
				label: "Stadtbuch Bände 1650 - 1750",
				url: dl + "data/stadtbuch_baende-1650_bis_1750.kml"
			}
		]
	};

	if ( typeof options != 'undefined') {
		$.extend(this.options, options);
	}

};
