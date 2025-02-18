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
import type { BetaRecruitmentCriterionCompatibleBuildCheckAttributes } from './BetaRecruitmentCriterionCompatibleBuildCheckAttributes';
import {
    BetaRecruitmentCriterionCompatibleBuildCheckAttributesFromJSON,
    BetaRecruitmentCriterionCompatibleBuildCheckAttributesFromJSONTyped,
    BetaRecruitmentCriterionCompatibleBuildCheckAttributesToJSON,
} from './BetaRecruitmentCriterionCompatibleBuildCheckAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaRecruitmentCriterionCompatibleBuildCheck
 */
export interface BetaRecruitmentCriterionCompatibleBuildCheck {
    /**
     * 
     * @type {string}
     * @memberof BetaRecruitmentCriterionCompatibleBuildCheck
     */
    type: BetaRecruitmentCriterionCompatibleBuildCheckTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaRecruitmentCriterionCompatibleBuildCheck
     */
    id: string;
    /**
     * 
     * @type {BetaRecruitmentCriterionCompatibleBuildCheckAttributes}
     * @memberof BetaRecruitmentCriterionCompatibleBuildCheck
     */
    attributes?: BetaRecruitmentCriterionCompatibleBuildCheckAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaRecruitmentCriterionCompatibleBuildCheck
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaRecruitmentCriterionCompatibleBuildCheckTypeEnum = {
    BetaRecruitmentCriterionCompatibleBuildChecks: 'betaRecruitmentCriterionCompatibleBuildChecks'
} as const;
export type BetaRecruitmentCriterionCompatibleBuildCheckTypeEnum = typeof BetaRecruitmentCriterionCompatibleBuildCheckTypeEnum[keyof typeof BetaRecruitmentCriterionCompatibleBuildCheckTypeEnum];


/**
 * Check if a given object implements the BetaRecruitmentCriterionCompatibleBuildCheck interface.
 */
export function instanceOfBetaRecruitmentCriterionCompatibleBuildCheck(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaRecruitmentCriterionCompatibleBuildCheckFromJSON(json: any): BetaRecruitmentCriterionCompatibleBuildCheck {
    return BetaRecruitmentCriterionCompatibleBuildCheckFromJSONTyped(json, false);
}

export function BetaRecruitmentCriterionCompatibleBuildCheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaRecruitmentCriterionCompatibleBuildCheck {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaRecruitmentCriterionCompatibleBuildCheckAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaRecruitmentCriterionCompatibleBuildCheckToJSON(value?: BetaRecruitmentCriterionCompatibleBuildCheck | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaRecruitmentCriterionCompatibleBuildCheckAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

