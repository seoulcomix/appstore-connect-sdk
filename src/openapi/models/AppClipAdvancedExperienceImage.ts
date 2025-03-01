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
import type { AppClipAdvancedExperienceImageAttributes } from './AppClipAdvancedExperienceImageAttributes';
import {
    AppClipAdvancedExperienceImageAttributesFromJSON,
    AppClipAdvancedExperienceImageAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageAttributesToJSON,
} from './AppClipAdvancedExperienceImageAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceImage
 */
export interface AppClipAdvancedExperienceImage {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImage
     */
    type: AppClipAdvancedExperienceImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImage
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageAttributes}
     * @memberof AppClipAdvancedExperienceImage
     */
    attributes?: AppClipAdvancedExperienceImageAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipAdvancedExperienceImage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceImageTypeEnum = {
    AppClipAdvancedExperienceImages: 'appClipAdvancedExperienceImages'
} as const;
export type AppClipAdvancedExperienceImageTypeEnum = typeof AppClipAdvancedExperienceImageTypeEnum[keyof typeof AppClipAdvancedExperienceImageTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceImage interface.
 */
export function instanceOfAppClipAdvancedExperienceImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceImageFromJSON(json: any): AppClipAdvancedExperienceImage {
    return AppClipAdvancedExperienceImageFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipAdvancedExperienceImageToJSON(value?: AppClipAdvancedExperienceImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceImageAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

