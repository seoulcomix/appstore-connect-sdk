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
import type { AppClipDefaultExperienceLocalizationAttributes } from './AppClipDefaultExperienceLocalizationAttributes';
import {
    AppClipDefaultExperienceLocalizationAttributesFromJSON,
    AppClipDefaultExperienceLocalizationAttributesFromJSONTyped,
    AppClipDefaultExperienceLocalizationAttributesToJSON,
} from './AppClipDefaultExperienceLocalizationAttributes';
import type { AppClipDefaultExperienceLocalizationRelationships } from './AppClipDefaultExperienceLocalizationRelationships';
import {
    AppClipDefaultExperienceLocalizationRelationshipsFromJSON,
    AppClipDefaultExperienceLocalizationRelationshipsFromJSONTyped,
    AppClipDefaultExperienceLocalizationRelationshipsToJSON,
} from './AppClipDefaultExperienceLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalization
 */
export interface AppClipDefaultExperienceLocalization {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalization
     */
    type: AppClipDefaultExperienceLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalization
     */
    id: string;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationAttributes}
     * @memberof AppClipDefaultExperienceLocalization
     */
    attributes?: AppClipDefaultExperienceLocalizationAttributes;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationRelationships}
     * @memberof AppClipDefaultExperienceLocalization
     */
    relationships?: AppClipDefaultExperienceLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipDefaultExperienceLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
} as const;
export type AppClipDefaultExperienceLocalizationTypeEnum = typeof AppClipDefaultExperienceLocalizationTypeEnum[keyof typeof AppClipDefaultExperienceLocalizationTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceLocalization interface.
 */
export function instanceOfAppClipDefaultExperienceLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationFromJSON(json: any): AppClipDefaultExperienceLocalization {
    return AppClipDefaultExperienceLocalizationFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipDefaultExperienceLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppClipDefaultExperienceLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipDefaultExperienceLocalizationToJSON(value?: AppClipDefaultExperienceLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipDefaultExperienceLocalizationAttributesToJSON(value.attributes),
        'relationships': AppClipDefaultExperienceLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

