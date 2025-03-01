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
import type { AppEventAssetType } from './AppEventAssetType';
import {
    AppEventAssetTypeFromJSON,
    AppEventAssetTypeFromJSONTyped,
    AppEventAssetTypeToJSON,
} from './AppEventAssetType';

/**
 * 
 * @export
 * @interface AppEventVideoClipCreateRequestDataAttributes
 */
export interface AppEventVideoClipCreateRequestDataAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     * 
     * @type {AppEventAssetType}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    appEventAssetType: AppEventAssetType;
}

/**
 * Check if a given object implements the AppEventVideoClipCreateRequestDataAttributes interface.
 */
export function instanceOfAppEventVideoClipCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fileSize" in value;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "appEventAssetType" in value;

    return isInstance;
}

export function AppEventVideoClipCreateRequestDataAttributesFromJSON(json: any): AppEventVideoClipCreateRequestDataAttributes {
    return AppEventVideoClipCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventVideoClipCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'],
        'fileName': json['fileName'],
        'previewFrameTimeCode': !exists(json, 'previewFrameTimeCode') ? undefined : json['previewFrameTimeCode'],
        'appEventAssetType': AppEventAssetTypeFromJSON(json['appEventAssetType']),
    };
}

export function AppEventVideoClipCreateRequestDataAttributesToJSON(value?: AppEventVideoClipCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'previewFrameTimeCode': value.previewFrameTimeCode,
        'appEventAssetType': AppEventAssetTypeToJSON(value.appEventAssetType),
    };
}

