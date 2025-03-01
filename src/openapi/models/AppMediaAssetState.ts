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
import type { AppMediaStateError } from './AppMediaStateError';
import {
    AppMediaStateErrorFromJSON,
    AppMediaStateErrorFromJSONTyped,
    AppMediaStateErrorToJSON,
} from './AppMediaStateError';

/**
 * 
 * @export
 * @interface AppMediaAssetState
 */
export interface AppMediaAssetState {
    /**
     * 
     * @type {Array<AppMediaStateError>}
     * @memberof AppMediaAssetState
     */
    errors?: Array<AppMediaStateError>;
    /**
     * 
     * @type {Array<AppMediaStateError>}
     * @memberof AppMediaAssetState
     */
    warnings?: Array<AppMediaStateError>;
    /**
     * 
     * @type {string}
     * @memberof AppMediaAssetState
     */
    state?: AppMediaAssetStateStateEnum;
}


/**
 * @export
 */
export const AppMediaAssetStateStateEnum = {
    AwaitingUpload: 'AWAITING_UPLOAD',
    UploadComplete: 'UPLOAD_COMPLETE',
    Complete: 'COMPLETE',
    Failed: 'FAILED'
} as const;
export type AppMediaAssetStateStateEnum = typeof AppMediaAssetStateStateEnum[keyof typeof AppMediaAssetStateStateEnum];


/**
 * Check if a given object implements the AppMediaAssetState interface.
 */
export function instanceOfAppMediaAssetState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppMediaAssetStateFromJSON(json: any): AppMediaAssetState {
    return AppMediaAssetStateFromJSONTyped(json, false);
}

export function AppMediaAssetStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppMediaAssetState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(AppMediaStateErrorFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(AppMediaStateErrorFromJSON)),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function AppMediaAssetStateToJSON(value?: AppMediaAssetState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(AppMediaStateErrorToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(AppMediaStateErrorToJSON)),
        'state': value.state,
    };
}

