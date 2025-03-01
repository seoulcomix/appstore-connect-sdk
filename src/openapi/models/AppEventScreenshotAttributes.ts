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
import type { AppMediaAssetState } from './AppMediaAssetState';
import {
    AppMediaAssetStateFromJSON,
    AppMediaAssetStateFromJSONTyped,
    AppMediaAssetStateToJSON,
} from './AppMediaAssetState';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
} from './UploadOperation';

/**
 * 
 * @export
 * @interface AppEventScreenshotAttributes
 */
export interface AppEventScreenshotAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppEventScreenshotAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppEventScreenshotAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof AppEventScreenshotAttributes
     */
    imageAsset?: ImageAsset;
    /**
     * 
     * @type {string}
     * @memberof AppEventScreenshotAttributes
     */
    assetToken?: string;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppEventScreenshotAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppEventScreenshotAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
    /**
     * 
     * @type {AppEventAssetType}
     * @memberof AppEventScreenshotAttributes
     */
    appEventAssetType?: AppEventAssetType;
}

/**
 * Check if a given object implements the AppEventScreenshotAttributes interface.
 */
export function instanceOfAppEventScreenshotAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventScreenshotAttributesFromJSON(json: any): AppEventScreenshotAttributes {
    return AppEventScreenshotAttributesFromJSONTyped(json, false);
}

export function AppEventScreenshotAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'imageAsset': !exists(json, 'imageAsset') ? undefined : ImageAssetFromJSON(json['imageAsset']),
        'assetToken': !exists(json, 'assetToken') ? undefined : json['assetToken'],
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': !exists(json, 'assetDeliveryState') ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
        'appEventAssetType': !exists(json, 'appEventAssetType') ? undefined : AppEventAssetTypeFromJSON(json['appEventAssetType']),
    };
}

export function AppEventScreenshotAttributesToJSON(value?: AppEventScreenshotAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'imageAsset': ImageAssetToJSON(value.imageAsset),
        'assetToken': value.assetToken,
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value.assetDeliveryState),
        'appEventAssetType': AppEventAssetTypeToJSON(value.appEventAssetType),
    };
}

