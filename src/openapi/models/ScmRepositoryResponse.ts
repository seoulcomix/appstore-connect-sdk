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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { ScmRepositoriesResponseIncludedInner } from './ScmRepositoriesResponseIncludedInner';
import {
    ScmRepositoriesResponseIncludedInnerFromJSON,
    ScmRepositoriesResponseIncludedInnerFromJSONTyped,
    ScmRepositoriesResponseIncludedInnerToJSON,
} from './ScmRepositoriesResponseIncludedInner';
import type { ScmRepository } from './ScmRepository';
import {
    ScmRepositoryFromJSON,
    ScmRepositoryFromJSONTyped,
    ScmRepositoryToJSON,
} from './ScmRepository';

/**
 * 
 * @export
 * @interface ScmRepositoryResponse
 */
export interface ScmRepositoryResponse {
    /**
     * 
     * @type {ScmRepository}
     * @memberof ScmRepositoryResponse
     */
    data: ScmRepository;
    /**
     * 
     * @type {Array<ScmRepositoriesResponseIncludedInner>}
     * @memberof ScmRepositoryResponse
     */
    included?: Array<ScmRepositoriesResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ScmRepositoryResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ScmRepositoryResponse interface.
 */
export function instanceOfScmRepositoryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ScmRepositoryResponseFromJSON(json: any): ScmRepositoryResponse {
    return ScmRepositoryResponseFromJSONTyped(json, false);
}

export function ScmRepositoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ScmRepositoryFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ScmRepositoriesResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ScmRepositoryResponseToJSON(value?: ScmRepositoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ScmRepositoryToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ScmRepositoriesResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

