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
import type { CiStartConditionFileMatcher } from './CiStartConditionFileMatcher';
import {
    CiStartConditionFileMatcherFromJSON,
    CiStartConditionFileMatcherFromJSONTyped,
    CiStartConditionFileMatcherToJSON,
} from './CiStartConditionFileMatcher';

/**
 * 
 * @export
 * @interface CiFilesAndFoldersRule
 */
export interface CiFilesAndFoldersRule {
    /**
     * 
     * @type {string}
     * @memberof CiFilesAndFoldersRule
     */
    mode?: CiFilesAndFoldersRuleModeEnum;
    /**
     * 
     * @type {Array<CiStartConditionFileMatcher>}
     * @memberof CiFilesAndFoldersRule
     */
    matchers?: Array<CiStartConditionFileMatcher>;
}


/**
 * @export
 */
export const CiFilesAndFoldersRuleModeEnum = {
    StartIfAnyFileMatches: 'START_IF_ANY_FILE_MATCHES',
    DoNotStartIfAllFilesMatch: 'DO_NOT_START_IF_ALL_FILES_MATCH'
} as const;
export type CiFilesAndFoldersRuleModeEnum = typeof CiFilesAndFoldersRuleModeEnum[keyof typeof CiFilesAndFoldersRuleModeEnum];


/**
 * Check if a given object implements the CiFilesAndFoldersRule interface.
 */
export function instanceOfCiFilesAndFoldersRule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiFilesAndFoldersRuleFromJSON(json: any): CiFilesAndFoldersRule {
    return CiFilesAndFoldersRuleFromJSONTyped(json, false);
}

export function CiFilesAndFoldersRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiFilesAndFoldersRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'matchers': !exists(json, 'matchers') ? undefined : ((json['matchers'] as Array<any>).map(CiStartConditionFileMatcherFromJSON)),
    };
}

export function CiFilesAndFoldersRuleToJSON(value?: CiFilesAndFoldersRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mode': value.mode,
        'matchers': value.matchers === undefined ? undefined : ((value.matchers as Array<any>).map(CiStartConditionFileMatcherToJSON)),
    };
}

