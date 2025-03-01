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
/**
 * 
 * @export
 * @interface AppEventVideoClipUpdateRequestDataAttributes
 */
export interface AppEventVideoClipUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipUpdateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppEventVideoClipUpdateRequestDataAttributes
     */
    uploaded?: boolean;
}

/**
 * Check if a given object implements the AppEventVideoClipUpdateRequestDataAttributes interface.
 */
export function instanceOfAppEventVideoClipUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventVideoClipUpdateRequestDataAttributesFromJSON(json: any): AppEventVideoClipUpdateRequestDataAttributes {
    return AppEventVideoClipUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventVideoClipUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'previewFrameTimeCode': !exists(json, 'previewFrameTimeCode') ? undefined : json['previewFrameTimeCode'],
        'uploaded': !exists(json, 'uploaded') ? undefined : json['uploaded'],
    };
}

export function AppEventVideoClipUpdateRequestDataAttributesToJSON(value?: AppEventVideoClipUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'previewFrameTimeCode': value.previewFrameTimeCode,
        'uploaded': value.uploaded,
    };
}

