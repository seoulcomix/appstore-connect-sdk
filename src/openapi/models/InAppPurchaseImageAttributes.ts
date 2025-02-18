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
 * @interface InAppPurchaseImageAttributes
 */
export interface InAppPurchaseImageAttributes {
    /**
     * 
     * @type {number}
     * @memberof InAppPurchaseImageAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    assetToken?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof InAppPurchaseImageAttributes
     */
    imageAsset?: ImageAsset;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof InAppPurchaseImageAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    state?: InAppPurchaseImageAttributesStateEnum;
}


/**
 * @export
 */
export const InAppPurchaseImageAttributesStateEnum = {
    AwaitingUpload: 'AWAITING_UPLOAD',
    UploadComplete: 'UPLOAD_COMPLETE',
    Failed: 'FAILED',
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    Approved: 'APPROVED',
    Rejected: 'REJECTED'
} as const;
export type InAppPurchaseImageAttributesStateEnum = typeof InAppPurchaseImageAttributesStateEnum[keyof typeof InAppPurchaseImageAttributesStateEnum];


/**
 * Check if a given object implements the InAppPurchaseImageAttributes interface.
 */
export function instanceOfInAppPurchaseImageAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseImageAttributesFromJSON(json: any): InAppPurchaseImageAttributes {
    return InAppPurchaseImageAttributesFromJSONTyped(json, false);
}

export function InAppPurchaseImageAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileSize': !exists(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
        'sourceFileChecksum': !exists(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'assetToken': !exists(json, 'assetToken') ? undefined : json['assetToken'],
        'imageAsset': !exists(json, 'imageAsset') ? undefined : ImageAssetFromJSON(json['imageAsset']),
        'uploadOperations': !exists(json, 'uploadOperations') ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function InAppPurchaseImageAttributesToJSON(value?: InAppPurchaseImageAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'sourceFileChecksum': value.sourceFileChecksum,
        'assetToken': value.assetToken,
        'imageAsset': ImageAssetToJSON(value.imageAsset),
        'uploadOperations': value.uploadOperations === undefined ? undefined : ((value.uploadOperations as Array<any>).map(UploadOperationToJSON)),
        'state': value.state,
    };
}

