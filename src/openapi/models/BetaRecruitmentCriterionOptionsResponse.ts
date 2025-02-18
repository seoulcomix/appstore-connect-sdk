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
import type { BetaRecruitmentCriterionOption } from './BetaRecruitmentCriterionOption';
import {
    BetaRecruitmentCriterionOptionFromJSON,
    BetaRecruitmentCriterionOptionFromJSONTyped,
    BetaRecruitmentCriterionOptionToJSON,
} from './BetaRecruitmentCriterionOption';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface BetaRecruitmentCriterionOptionsResponse
 */
export interface BetaRecruitmentCriterionOptionsResponse {
    /**
     * 
     * @type {Array<BetaRecruitmentCriterionOption>}
     * @memberof BetaRecruitmentCriterionOptionsResponse
     */
    data: Array<BetaRecruitmentCriterionOption>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaRecruitmentCriterionOptionsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaRecruitmentCriterionOptionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaRecruitmentCriterionOptionsResponse interface.
 */
export function instanceOfBetaRecruitmentCriterionOptionsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaRecruitmentCriterionOptionsResponseFromJSON(json: any): BetaRecruitmentCriterionOptionsResponse {
    return BetaRecruitmentCriterionOptionsResponseFromJSONTyped(json, false);
}

export function BetaRecruitmentCriterionOptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaRecruitmentCriterionOptionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaRecruitmentCriterionOptionFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaRecruitmentCriterionOptionsResponseToJSON(value?: BetaRecruitmentCriterionOptionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaRecruitmentCriterionOptionToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

