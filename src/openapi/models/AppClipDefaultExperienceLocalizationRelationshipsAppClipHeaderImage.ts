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
import type { AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData } from './AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData';
import {
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSONTyped,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON,
} from './AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage
 */
export interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage
     */
    data?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON(json: any): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage {
    return AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON(value?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON(value.data),
    };
}

