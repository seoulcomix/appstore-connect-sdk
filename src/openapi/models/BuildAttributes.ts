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
import type { BuildAudienceType } from './BuildAudienceType';
import {
    BuildAudienceTypeFromJSON,
    BuildAudienceTypeFromJSONTyped,
    BuildAudienceTypeToJSON,
} from './BuildAudienceType';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';

/**
 * 
 * @export
 * @interface BuildAttributes
 */
export interface BuildAttributes {
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    version?: string;
    /**
     * 
     * @type {Date}
     * @memberof BuildAttributes
     */
    uploadedDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BuildAttributes
     */
    expirationDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAttributes
     */
    expired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    minOsVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    lsMinimumSystemVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    computedMinMacOsVersion?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof BuildAttributes
     */
    iconAssetToken?: ImageAsset;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    processingState?: BuildAttributesProcessingStateEnum;
    /**
     * 
     * @type {BuildAudienceType}
     * @memberof BuildAttributes
     */
    buildAudienceType?: BuildAudienceType;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAttributes
     */
    usesNonExemptEncryption?: boolean;
}


/**
 * @export
 */
export const BuildAttributesProcessingStateEnum = {
    Processing: 'PROCESSING',
    Failed: 'FAILED',
    Invalid: 'INVALID',
    Valid: 'VALID'
} as const;
export type BuildAttributesProcessingStateEnum = typeof BuildAttributesProcessingStateEnum[keyof typeof BuildAttributesProcessingStateEnum];


/**
 * Check if a given object implements the BuildAttributes interface.
 */
export function instanceOfBuildAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildAttributesFromJSON(json: any): BuildAttributes {
    return BuildAttributesFromJSONTyped(json, false);
}

export function BuildAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'uploadedDate': !exists(json, 'uploadedDate') ? undefined : (new Date(json['uploadedDate'])),
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'expired': !exists(json, 'expired') ? undefined : json['expired'],
        'minOsVersion': !exists(json, 'minOsVersion') ? undefined : json['minOsVersion'],
        'lsMinimumSystemVersion': !exists(json, 'lsMinimumSystemVersion') ? undefined : json['lsMinimumSystemVersion'],
        'computedMinMacOsVersion': !exists(json, 'computedMinMacOsVersion') ? undefined : json['computedMinMacOsVersion'],
        'iconAssetToken': !exists(json, 'iconAssetToken') ? undefined : ImageAssetFromJSON(json['iconAssetToken']),
        'processingState': !exists(json, 'processingState') ? undefined : json['processingState'],
        'buildAudienceType': !exists(json, 'buildAudienceType') ? undefined : BuildAudienceTypeFromJSON(json['buildAudienceType']),
        'usesNonExemptEncryption': !exists(json, 'usesNonExemptEncryption') ? undefined : json['usesNonExemptEncryption'],
    };
}

export function BuildAttributesToJSON(value?: BuildAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'uploadedDate': value.uploadedDate === undefined ? undefined : (value.uploadedDate.toISOString()),
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString()),
        'expired': value.expired,
        'minOsVersion': value.minOsVersion,
        'lsMinimumSystemVersion': value.lsMinimumSystemVersion,
        'computedMinMacOsVersion': value.computedMinMacOsVersion,
        'iconAssetToken': ImageAssetToJSON(value.iconAssetToken),
        'processingState': value.processingState,
        'buildAudienceType': BuildAudienceTypeToJSON(value.buildAudienceType),
        'usesNonExemptEncryption': value.usesNonExemptEncryption,
    };
}

