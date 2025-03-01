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
import type { BetaRecruitmentCriterionUpdateRequestDataAttributes } from './BetaRecruitmentCriterionUpdateRequestDataAttributes';
import {
    BetaRecruitmentCriterionUpdateRequestDataAttributesFromJSON,
    BetaRecruitmentCriterionUpdateRequestDataAttributesFromJSONTyped,
    BetaRecruitmentCriterionUpdateRequestDataAttributesToJSON,
} from './BetaRecruitmentCriterionUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaRecruitmentCriterionUpdateRequestData
 */
export interface BetaRecruitmentCriterionUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaRecruitmentCriterionUpdateRequestData
     */
    type: BetaRecruitmentCriterionUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaRecruitmentCriterionUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaRecruitmentCriterionUpdateRequestDataAttributes}
     * @memberof BetaRecruitmentCriterionUpdateRequestData
     */
    attributes?: BetaRecruitmentCriterionUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BetaRecruitmentCriterionUpdateRequestDataTypeEnum = {
    BetaRecruitmentCriteria: 'betaRecruitmentCriteria'
} as const;
export type BetaRecruitmentCriterionUpdateRequestDataTypeEnum = typeof BetaRecruitmentCriterionUpdateRequestDataTypeEnum[keyof typeof BetaRecruitmentCriterionUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaRecruitmentCriterionUpdateRequestData interface.
 */
export function instanceOfBetaRecruitmentCriterionUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaRecruitmentCriterionUpdateRequestDataFromJSON(json: any): BetaRecruitmentCriterionUpdateRequestData {
    return BetaRecruitmentCriterionUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaRecruitmentCriterionUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaRecruitmentCriterionUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaRecruitmentCriterionUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BetaRecruitmentCriterionUpdateRequestDataToJSON(value?: BetaRecruitmentCriterionUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaRecruitmentCriterionUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

