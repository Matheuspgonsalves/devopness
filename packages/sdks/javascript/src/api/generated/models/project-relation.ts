/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ResourceSummaryItem } from './resource-summary-item';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface ProjectRelation
 */
export interface ProjectRelation {
    /**
     * The Id of the project
     * @type {number}
     * @memberof ProjectRelation
     */
    id: number;
    /**
     * The id of the user that own the project
     * @type {number}
     * @memberof ProjectRelation
     */
    user_id: number;
    /**
     * The project\'s name
     * @type {string}
     * @memberof ProjectRelation
     */
    name: string;
    /**
     * A URL path to the project\'s logo image
     * @type {string}
     * @memberof ProjectRelation
     */
    logo_url: string | null;
    /**
     * Summary of the resource
     * @type {Array<ResourceSummaryItem>}
     * @memberof ProjectRelation
     */
    resource_summary?: Array<ResourceSummaryItem>;
    /**
     * The list of the operating system users found in all the servers linked to a project
     * @type {Array<object>}
     * @memberof ProjectRelation
     */
    os_users: Array<object>;
    /**
     * 
     * @type {UserRelation}
     * @memberof ProjectRelation
     */
    created_by_user: UserRelation;
    /**
     * Number of credits used in the current monthly billing cycle by actions of resources in the project.
     * @type {number}
     * @memberof ProjectRelation
     */
    used_credits?: number;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ProjectRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ProjectRelation
     */
    updated_at: string;
}

