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
import type { FileLocation } from './FileLocation';
import {
    FileLocationFromJSON,
    FileLocationFromJSONTyped,
    FileLocationToJSON,
} from './FileLocation';

/**
 * 
 * @export
 * @interface CiIssueAttributes
 */
export interface CiIssueAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiIssueAttributes
     */
    issueType?: CiIssueAttributesIssueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiIssueAttributes
     */
    message?: string;
    /**
     * 
     * @type {FileLocation}
     * @memberof CiIssueAttributes
     */
    fileSource?: FileLocation;
    /**
     * 
     * @type {string}
     * @memberof CiIssueAttributes
     */
    category?: string;
}


/**
 * @export
 */
export const CiIssueAttributesIssueTypeEnum = {
    AnalyzerWarning: 'ANALYZER_WARNING',
    Error: 'ERROR',
    TestFailure: 'TEST_FAILURE',
    Warning: 'WARNING'
} as const;
export type CiIssueAttributesIssueTypeEnum = typeof CiIssueAttributesIssueTypeEnum[keyof typeof CiIssueAttributesIssueTypeEnum];


/**
 * Check if a given object implements the CiIssueAttributes interface.
 */
export function instanceOfCiIssueAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiIssueAttributesFromJSON(json: any): CiIssueAttributes {
    return CiIssueAttributesFromJSONTyped(json, false);
}

export function CiIssueAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssueAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issueType': !exists(json, 'issueType') ? undefined : json['issueType'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'fileSource': !exists(json, 'fileSource') ? undefined : FileLocationFromJSON(json['fileSource']),
        'category': !exists(json, 'category') ? undefined : json['category'],
    };
}

export function CiIssueAttributesToJSON(value?: CiIssueAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'issueType': value.issueType,
        'message': value.message,
        'fileSource': FileLocationToJSON(value.fileSource),
        'category': value.category,
    };
}

