obj = {
	"operationalLayers": [{
		"layerType": "ArcGISFeatureLayer",
		"featureCollectionType": "notes",
		"id": "mapNotes_6722",
		"title": "Punto",
		"featureCollection": {
			"layers": [{
				"layerDefinition": {
					"objectIdField": "OBJECTID",
					"templates": [],
					"type": "Feature Layer",
					"drawingInfo": {
						"renderer": {
							"field1": "TYPEID",
							"type": "uniqueValue",
							"uniqueValueInfos": [{
								"symbol": {
									"style": "esriSFSSolid",
									"color": [155, 187, 89, 128],
									"outline": {
										"style": "esriSLSSolid",
										"color": [115, 140, 61, 255],
										"width": 1.5,
										"type": "esriSLS"
									},
									"type": "esriSFS"
								},
								"description": "",
								"value": "0",
								"label": "Área"
							}]
						}
					},
					"displayField": "TITLE",
					"visibilityField": "VISIBLE",
					"name": "Áreas",
					"hasAttachments": false,
					"typeIdField": "TYPEID",
					"capabilities": "Query,Editing",
					"types": [{
						"id": 0,
						"templates": [{
							"drawingTool": "esriFeatureEditToolPolygon",
							"description": "",
							"name": "Área",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolTriangle",
							"description": "",
							"name": "Triángulo",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolRectangle",
							"description": "",
							"name": "Rectángulo",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolLeftArrow",
							"description": "",
							"name": "Flecha hacia la izquierda",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolRightArrow",
							"description": "",
							"name": "Flecha hacia la derecha",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolEllipse",
							"description": "",
							"name": "Elipse",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolUpArrow",
							"description": "",
							"name": "Flecha hacia arriba",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolDownArrow",
							"description": "",
							"name": "Flecha hacia abajo",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolCircle",
							"description": "",
							"name": "Círculo",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolFreehand",
							"description": "",
							"name": "Área de dibujo a mano alzada",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Área",
									"TYPEID": 0
								}
							}
						}],
						"domains": {},
						"name": "Área"
					}],
					"geometryType": "esriGeometryPolygon",
					"fields": [{
						"alias": "OBJECTID",
						"name": "OBJECTID",
						"type": "esriFieldTypeOID",
						"editable": false
					}, {
						"alias": "Title",
						"name": "TITLE",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Visible",
						"name": "VISIBLE",
						"type": "esriFieldTypeInteger",
						"editable": true
					}, {
						"alias": "Description",
						"name": "DESCRIPTION",
						"length": 1073741822,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image URL",
						"name": "IMAGE_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image Link URL",
						"name": "IMAGE_LINK_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "DATE",
						"name": "DATE",
						"length": 36,
						"type": "esriFieldTypeDate",
						"editable": true
					}, {
						"alias": "Type ID",
						"name": "TYPEID",
						"type": "esriFieldTypeInteger",
						"editable": true
					}],
					"extent": null,
					"spatialReference": {
						"wkid": 102100,
						"latestWkid": 3857
					}
				},
				"popupInfo": {
					"mediaInfos": [{
						"value": {
							"sourceURL": "{IMAGE_URL}",
							"linkURL": "{IMAGE_LINK_URL}"
						},
						"type": "image"
					}],
					"title": "{TITLE}",
					"description": "{DESCRIPTION}"
				},
				"featureSet": {
					"geometryType": "esriGeometryPolygon",
					"features": []
				},
				"nextObjectId": 0
			}, {
				"layerDefinition": {
					"objectIdField": "OBJECTID",
					"templates": [],
					"type": "Feature Layer",
					"drawingInfo": {
						"renderer": {
							"field1": "TYPEID",
							"type": "uniqueValue",
							"uniqueValueInfos": [{
								"symbol": {
									"style": "esriSLSSolid",
									"color": [115, 140, 61, 255],
									"width": 1.5,
									"type": "esriSLS"
								},
								"description": "",
								"value": "0",
								"label": "Línea"
							}]
						}
					},
					"displayField": "TITLE",
					"visibilityField": "VISIBLE",
					"name": "Líneas",
					"hasAttachments": false,
					"typeIdField": "TYPEID",
					"capabilities": "Query,Editing",
					"types": [{
						"id": 0,
						"templates": [{
							"drawingTool": "esriFeatureEditToolLine",
							"description": "",
							"name": "Línea",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Línea",
									"TYPEID": 0
								}
							}
						}, {
							"drawingTool": "esriFeatureEditToolFreehand",
							"description": "",
							"name": "Línea a mano libre",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Línea",
									"TYPEID": 0
								}
							}
						}],
						"domains": {},
						"name": "Línea"
					}],
					"geometryType": "esriGeometryPolyline",
					"fields": [{
						"alias": "OBJECTID",
						"name": "OBJECTID",
						"type": "esriFieldTypeOID",
						"editable": false
					}, {
						"alias": "Title",
						"name": "TITLE",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Visible",
						"name": "VISIBLE",
						"type": "esriFieldTypeInteger",
						"editable": true
					}, {
						"alias": "Description",
						"name": "DESCRIPTION",
						"length": 1073741822,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image URL",
						"name": "IMAGE_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image Link URL",
						"name": "IMAGE_LINK_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "DATE",
						"name": "DATE",
						"length": 36,
						"type": "esriFieldTypeDate",
						"editable": true
					}, {
						"alias": "Type ID",
						"name": "TYPEID",
						"type": "esriFieldTypeInteger",
						"editable": true
					}],
					"extent": null,
					"spatialReference": {
						"wkid": 102100,
						"latestWkid": 3857
					}
				},
				"popupInfo": {
					"mediaInfos": [{
						"value": {
							"sourceURL": "{IMAGE_URL}",
							"linkURL": "{IMAGE_LINK_URL}"
						},
						"type": "image"
					}],
					"title": "{TITLE}",
					"description": "{DESCRIPTION}"
				},
				"featureSet": {
					"geometryType": "esriGeometryPolyline",
					"features": []
				},
				"nextObjectId": 0
			}, {
				"layerDefinition": {
					"objectIdField": "OBJECTID",
					"templates": [],
					"type": "Feature Layer",
					"drawingInfo": {
						"renderer": {
							"field1": "TYPEID",
							"type": "uniqueValue",
							"uniqueValueInfos": [{
								"symbol": {
									"horizontalAlignment": "left",
									"verticalAlignment": "baseline",
									"color": [0, 0, 0, 255],
									"font": {
										"weight": "bold",
										"style": "normal",
										"family": "Arial Unicode MS",
										"size": 12
									},
									"type": "esriTS"
								},
								"description": "",
								"value": "0",
								"label": "Texto"
							}]
						}
					},
					"displayField": "TITLE",
					"visibilityField": "VISIBLE",
					"name": "Texto",
					"hasAttachments": false,
					"typeIdField": "TYPEID",
					"capabilities": "Query,Editing",
					"types": [{
						"id": 0,
						"templates": [{
							"drawingTool": "esriFeatureEditToolText",
							"description": "",
							"name": "Texto",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TYPEID": 0
								}
							}
						}],
						"domains": {},
						"name": "Texto"
					}],
					"geometryType": "esriGeometryPoint",
					"fields": [{
						"alias": "OBJECTID",
						"name": "OBJECTID",
						"type": "esriFieldTypeOID",
						"editable": false
					}, {
						"alias": "Title",
						"name": "TITLE",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Visible",
						"name": "VISIBLE",
						"type": "esriFieldTypeInteger",
						"editable": true
					}, {
						"alias": "Description",
						"name": "DESCRIPTION",
						"length": 1073741822,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image URL",
						"name": "IMAGE_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image Link URL",
						"name": "IMAGE_LINK_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "DATE",
						"name": "DATE",
						"length": 36,
						"type": "esriFieldTypeDate",
						"editable": true
					}, {
						"alias": "Type ID",
						"name": "TYPEID",
						"type": "esriFieldTypeInteger",
						"editable": true
					}, {
						"alias": "Text",
						"name": "TEXT",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}],
					"extent": null,
					"spatialReference": {
						"wkid": 102100,
						"latestWkid": 3857
					}
				},
				"featureSet": {
					"geometryType": "esriGeometryPoint",
					"features": []
				},
				"nextObjectId": 0
			}, {
				"layerDefinition": {
					"objectIdField": "OBJECTID",
					"templates": [],
					"type": "Feature Layer",
					"drawingInfo": {
						"renderer": {
							"field1": "TYPEID",
							"type": "uniqueValue",
							"uniqueValueInfos": [{
								"symbol": {
									"height": 24,
									"xoffset": 0,
									"yoffset": 12,
									"width": 24,
									"contentType": "image/png",
									"type": "esriPMS",
									"url": "https://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png"
								},
								"description": "",
								"value": "0",
								"label": "Alfiler"
							}, {
								"symbol": {
									"height": 24,
									"xoffset": 2,
									"yoffset": 8,
									"width": 24,
									"contentType": "image/png",
									"type": "esriPMS",
									"url": "https://static.arcgis.com/images/Symbols/Basic/GreenShinyPin.png"
								},
								"value": "1",
								"label": "Tachuela"
							}, {
								"symbol": {
									"style": "esriSMSCross",
									"color": [155, 187, 89, 128],
									"outline": {
										"style": "esriSLSSolid",
										"color": [115, 140, 61, 255],
										"width": 1,
										"type": "esriSLS"
									},
									"type": "esriSMS",
									"size": 18
								},
								"value": "2",
								"label": "Cruz"
							}]
						}
					},
					"displayField": "TITLE",
					"visibilityField": "VISIBLE",
					"name": "Puntos",
					"hasAttachments": false,
					"typeIdField": "TYPEID",
					"capabilities": "Query,Editing",
					"types": [{
						"id": 0,
						"templates": [{
							"drawingTool": "esriFeatureEditToolPoint",
							"description": "",
							"name": "Alfiler",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Punto",
									"TYPEID": 0
								}
							}
						}],
						"domains": {},
						"name": "Alfiler"
					}, {
						"id": 1,
						"templates": [{
							"drawingTool": "esriFeatureEditToolPoint",
							"description": "",
							"name": "Tachuela",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Punto",
									"TYPEID": 1
								}
							}
						}],
						"domains": {},
						"name": "Tachuela"
					}, {
						"id": 2,
						"templates": [{
							"drawingTool": "esriFeatureEditToolPoint",
							"description": "",
							"name": "Cruz",
							"prototype": {
								"attributes": {
									"VISIBLE": 1,
									"TITLE": "Punto",
									"TYPEID": 2
								}
							}
						}],
						"domains": {},
						"name": "Cruz"
					}],
					"geometryType": "esriGeometryPoint",
					"fields": [{
						"alias": "OBJECTID",
						"name": "OBJECTID",
						"type": "esriFieldTypeOID",
						"editable": false
					}, {
						"alias": "Title",
						"name": "TITLE",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Visible",
						"name": "VISIBLE",
						"type": "esriFieldTypeInteger",
						"editable": true
					}, {
						"alias": "Description",
						"name": "DESCRIPTION",
						"length": 1073741822,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image URL",
						"name": "IMAGE_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "Image Link URL",
						"name": "IMAGE_LINK_URL",
						"length": 255,
						"type": "esriFieldTypeString",
						"editable": true
					}, {
						"alias": "DATE",
						"name": "DATE",
						"length": 36,
						"type": "esriFieldTypeDate",
						"editable": true
					}, {
						"alias": "Type ID",
						"name": "TYPEID",
						"type": "esriFieldTypeInteger",
						"editable": true
					}],
					"extent": {
						"xmin": -72833.8208438523,
						"ymin": 4788842.68458558,
						"xmax": -72833.82064385229,
						"ymax": 4788842.684785579,
						"spatialReference": {
							"wkid": 102100
						}
					},
					"spatialReference": {
						"wkid": 102100
					}
				},
				"popupInfo": {
					"mediaInfos": [{
						"value": {
							"sourceURL": "{IMAGE_URL}",
							"linkURL": "{IMAGE_LINK_URL}"
						},
						"type": "image"
					}],
					"title": "{TITLE}",
					"description": "{DESCRIPTION}"
				},
				"featureSet": {
					"geometryType": "esriGeometryPoint",
					"features": [{
						"geometry": {
							"x": -72833.82,
							"y": 4788842.68,
							"spatialReference": {
								"wkid": 102100
							}
						},
						"attributes": {
							"VISIBLE": 1,
							"TITLE": "Punto",
							"TYPEID": 0,
							"OBJECTID": 0
						},
						"symbol": {
							"angle": 0,
							"xoffset": 0,
							"yoffset": 10,
							"type": "esriPMS",
							"url": "http://static.arcgis.com/images/Symbols/Shapes/BlackPin1LargeB.png",
							"imageData": "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMjg2RTIxOUQyNzExMUUwQUU5NUVFMEYwMTY0NzUwNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMjg2RTIxQUQyNzExMUUwQUU5NUVFMEYwMTY0NzUwNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyODZFMjE3RDI3MTExRTBBRTk1RUUwRjAxNjQ3NTA1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyODZFMjE4RDI3MTExRTBBRTk1RUUwRjAxNjQ3NTA1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQg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",
							"contentType": "image/png",
							"width": 24,
							"height": 24
						}
					}]
				},
				"nextObjectId": 1
			}],
			"showLegend": false
		},
		"opacity": 1,
		"visibility": true
	}],
	"baseMap": {
		"baseMapLayers": [{
			"id": "World_Hillshade_3805",
			"layerType": "ArcGISTiledMapServiceLayer",
			"url": "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",
			"visibility": true,
			"opacity": 1,
			"title": "Sombreado mundial"
		}, {
			"id": "VectorTile_2333",
			"type": "VectorTileLayer",
			"layerType": "VectorTileLayer",
			"title": "Mapa topográfico mundial",
			"styleUrl": "https://www.arcgis.com/sharing/rest/content/items/0d27022487ad4e09ae8f274e8d502776/resources/styles/root.json",
			"visibility": true,
			"opacity": 1
		}],
		"title": "Topográfico"
	},
	"spatialReference": {
		"wkid": 102100,
		"latestWkid": 3857
	},
	"authoringApp": "WebMapViewer",
	"authoringAppVersion": "6.4",
	"version": "2.13"
}
