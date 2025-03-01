/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';
import {
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';

/**
 * 
 * @export
 * @interface AppPreviewCreateRequestDataRelationshipsAppPreviewSet
 */
export interface AppPreviewCreateRequestDataRelationshipsAppPreviewSet {
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner}
     * @memberof AppPreviewCreateRequestDataRelationshipsAppPreviewSet
     */
    data: AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner;
}

/**
 * Check if a given object implements the AppPreviewCreateRequestDataRelationshipsAppPreviewSet interface.
 */
export function instanceOfAppPreviewCreateRequestDataRelationshipsAppPreviewSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPreviewCreateRequestDataRelationshipsAppPreviewSetFromJSON(json: any): AppPreviewCreateRequestDataRelationshipsAppPreviewSet {
    return AppPreviewCreateRequestDataRelationshipsAppPreviewSetFromJSONTyped(json, false);
}

export function AppPreviewCreateRequestDataRelationshipsAppPreviewSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewCreateRequestDataRelationshipsAppPreviewSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON(json['data']),
    };
}

export function AppPreviewCreateRequestDataRelationshipsAppPreviewSetToJSON(value?: AppPreviewCreateRequestDataRelationshipsAppPreviewSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON(value.data),
    };
}

