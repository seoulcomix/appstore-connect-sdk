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
import type { AppClipAdvancedExperienceLocalizationAttributes } from './AppClipAdvancedExperienceLocalizationAttributes';
import {
    AppClipAdvancedExperienceLocalizationAttributesFromJSON,
    AppClipAdvancedExperienceLocalizationAttributesFromJSONTyped,
    AppClipAdvancedExperienceLocalizationAttributesToJSON,
} from './AppClipAdvancedExperienceLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceLocalization
 */
export interface AppClipAdvancedExperienceLocalization {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    type: AppClipAdvancedExperienceLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceLocalizationAttributes}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    attributes?: AppClipAdvancedExperienceLocalizationAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceLocalizationTypeEnum = {
    AppClipAdvancedExperienceLocalizations: 'appClipAdvancedExperienceLocalizations'
} as const;
export type AppClipAdvancedExperienceLocalizationTypeEnum = typeof AppClipAdvancedExperienceLocalizationTypeEnum[keyof typeof AppClipAdvancedExperienceLocalizationTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceLocalization interface.
 */
export function instanceOfAppClipAdvancedExperienceLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceLocalizationFromJSON(json: any): AppClipAdvancedExperienceLocalization {
    return AppClipAdvancedExperienceLocalizationFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceLocalizationAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipAdvancedExperienceLocalizationToJSON(value?: AppClipAdvancedExperienceLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceLocalizationAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

