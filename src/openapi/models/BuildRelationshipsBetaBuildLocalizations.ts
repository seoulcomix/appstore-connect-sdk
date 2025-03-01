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
import type { BuildRelationshipsBetaBuildLocalizationsDataInner } from './BuildRelationshipsBetaBuildLocalizationsDataInner';
import {
    BuildRelationshipsBetaBuildLocalizationsDataInnerFromJSON,
    BuildRelationshipsBetaBuildLocalizationsDataInnerFromJSONTyped,
    BuildRelationshipsBetaBuildLocalizationsDataInnerToJSON,
} from './BuildRelationshipsBetaBuildLocalizationsDataInner';
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
 * @interface BuildRelationshipsBetaBuildLocalizations
 */
export interface BuildRelationshipsBetaBuildLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildRelationshipsBetaBuildLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildRelationshipsBetaBuildLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BuildRelationshipsBetaBuildLocalizationsDataInner>}
     * @memberof BuildRelationshipsBetaBuildLocalizations
     */
    data?: Array<BuildRelationshipsBetaBuildLocalizationsDataInner>;
}

/**
 * Check if a given object implements the BuildRelationshipsBetaBuildLocalizations interface.
 */
export function instanceOfBuildRelationshipsBetaBuildLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsBetaBuildLocalizationsFromJSON(json: any): BuildRelationshipsBetaBuildLocalizations {
    return BuildRelationshipsBetaBuildLocalizationsFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaBuildLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaBuildLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BuildRelationshipsBetaBuildLocalizationsDataInnerFromJSON)),
    };
}

export function BuildRelationshipsBetaBuildLocalizationsToJSON(value?: BuildRelationshipsBetaBuildLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BuildRelationshipsBetaBuildLocalizationsDataInnerToJSON)),
    };
}

