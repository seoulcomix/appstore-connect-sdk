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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsDataInner } from './AlternativeDistributionPackageVersionRelationshipsVariantsDataInner';
import {
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSON,
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSON,
} from './AlternativeDistributionPackageVersionRelationshipsVariantsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageVersionRelationshipsVariants
 */
export interface AlternativeDistributionPackageVersionRelationshipsVariants {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariants
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariants
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AlternativeDistributionPackageVersionRelationshipsVariantsDataInner>}
     * @memberof AlternativeDistributionPackageVersionRelationshipsVariants
     */
    data?: Array<AlternativeDistributionPackageVersionRelationshipsVariantsDataInner>;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationshipsVariants interface.
 */
export function instanceOfAlternativeDistributionPackageVersionRelationshipsVariants(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsFromJSON(json: any): AlternativeDistributionPackageVersionRelationshipsVariants {
    return AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationshipsVariants {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerFromJSON)),
    };
}

export function AlternativeDistributionPackageVersionRelationshipsVariantsToJSON(value?: AlternativeDistributionPackageVersionRelationshipsVariants | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AlternativeDistributionPackageVersionRelationshipsVariantsDataInnerToJSON)),
    };
}

