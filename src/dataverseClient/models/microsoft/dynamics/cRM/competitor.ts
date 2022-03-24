import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCompetitoraddressFromDiscriminatorValue} from './createCompetitoraddressFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPostfollowFromDiscriminatorValue} from './createPostfollowFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createPostregardingFromDiscriminatorValue} from './createPostregardingFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesliteratureFromDiscriminatorValue} from './createSalesliteratureFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Competitoraddress, Connection, Crmbaseentity, Duplicaterecord, Lead, Mailboxtrackingfolder, Opportunity, Opportunityclose, Organization, Post, Postfollow, Postregarding, Principalobjectattributeaccess, Processsession, Processstage, Product, Salesliterature, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Competitor extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _address1_addressid?: string | undefined;
    private _address1_addresstypecode?: number | undefined;
    private _address1_city?: string | undefined;
    private _address1_composite?: string | undefined;
    private _address1_country?: string | undefined;
    private _address1_county?: string | undefined;
    private _address1_fax?: string | undefined;
    private _address1_latitude?: number | undefined;
    private _address1_line1?: string | undefined;
    private _address1_line2?: string | undefined;
    private _address1_line3?: string | undefined;
    private _address1_longitude?: number | undefined;
    private _address1_name?: string | undefined;
    private _address1_postalcode?: string | undefined;
    private _address1_postofficebox?: string | undefined;
    private _address1_shippingmethodcode?: number | undefined;
    private _address1_stateorprovince?: string | undefined;
    private _address1_telephone1?: string | undefined;
    private _address1_telephone2?: string | undefined;
    private _address1_telephone3?: string | undefined;
    private _address1_upszone?: string | undefined;
    private _address1_utcoffset?: number | undefined;
    private _address2_addressid?: string | undefined;
    private _address2_addresstypecode?: number | undefined;
    private _address2_city?: string | undefined;
    private _address2_composite?: string | undefined;
    private _address2_country?: string | undefined;
    private _address2_county?: string | undefined;
    private _address2_fax?: string | undefined;
    private _address2_latitude?: number | undefined;
    private _address2_line1?: string | undefined;
    private _address2_line2?: string | undefined;
    private _address2_line3?: string | undefined;
    private _address2_longitude?: number | undefined;
    private _address2_name?: string | undefined;
    private _address2_postalcode?: string | undefined;
    private _address2_postofficebox?: string | undefined;
    private _address2_shippingmethodcode?: number | undefined;
    private _address2_stateorprovince?: string | undefined;
    private _address2_telephone1?: string | undefined;
    private _address2_telephone2?: string | undefined;
    private _address2_telephone3?: string | undefined;
    private _address2_upszone?: string | undefined;
    private _address2_utcoffset?: number | undefined;
    private _competitor_addresses?: Competitoraddress[] | undefined;
    private _competitor_Annotation?: Annotation[] | undefined;
    private _competitor_AsyncOperations?: Asyncoperation[] | undefined;
    private _competitor_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _competitor_connections1?: Connection[] | undefined;
    private _competitor_connections2?: Connection[] | undefined;
    private _competitor_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _competitor_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _competitor_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _competitor_opportunity_activities?: Opportunityclose[] | undefined;
    private _competitor_PostFollows?: Postfollow[] | undefined;
    private _competitor_PostRegardings?: Postregarding[] | undefined;
    private _competitor_Posts?: Post[] | undefined;
    private _competitor_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _competitor_ProcessSessions?: Processsession[] | undefined;
    private _competitor_SyncErrors?: Syncerror[] | undefined;
    private _competitorid?: string | undefined;
    private _competitorproduct_association?: Product[] | undefined;
    private _competitorsalesliterature_association?: Salesliterature[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _keyproduct?: string | undefined;
    private _leadcompetitors_association?: Lead[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_gdproptout?: boolean | undefined;
    private _name?: string | undefined;
    private _opportunities?: string | undefined;
    private _opportunitycompetitors_association?: Opportunity[] | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overview?: string | undefined;
    private _processid?: string | undefined;
    private _referenceinfourl?: string | undefined;
    private _reportedrevenue?: number | undefined;
    private _reportedrevenue_base?: number | undefined;
    private _reportingquarter?: number | undefined;
    private _reportingyear?: number | undefined;
    private _stageid?: string | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _stockexchange?: string | undefined;
    private _strengths?: string | undefined;
    private _threats?: string | undefined;
    private _tickersymbol?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _weaknesses?: string | undefined;
    private _websiteurl?: string | undefined;
    private _winpercentage?: number | undefined;
    private _yominame?: string | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the address1_addressid property value. 
     * @returns a string
     */
    public get address1_addressid() {
        return this._address1_addressid;
    };
    /**
     * Sets the address1_addressid property value. 
     * @param value Value to set for the address1_addressid property.
     */
    public set address1_addressid(value: string | undefined) {
        this._address1_addressid = value;
    };
    /**
     * Gets the address1_addresstypecode property value. 
     * @returns a integer
     */
    public get address1_addresstypecode() {
        return this._address1_addresstypecode;
    };
    /**
     * Sets the address1_addresstypecode property value. 
     * @param value Value to set for the address1_addresstypecode property.
     */
    public set address1_addresstypecode(value: number | undefined) {
        this._address1_addresstypecode = value;
    };
    /**
     * Gets the address1_city property value. 
     * @returns a string
     */
    public get address1_city() {
        return this._address1_city;
    };
    /**
     * Sets the address1_city property value. 
     * @param value Value to set for the address1_city property.
     */
    public set address1_city(value: string | undefined) {
        this._address1_city = value;
    };
    /**
     * Gets the address1_composite property value. 
     * @returns a string
     */
    public get address1_composite() {
        return this._address1_composite;
    };
    /**
     * Sets the address1_composite property value. 
     * @param value Value to set for the address1_composite property.
     */
    public set address1_composite(value: string | undefined) {
        this._address1_composite = value;
    };
    /**
     * Gets the address1_country property value. 
     * @returns a string
     */
    public get address1_country() {
        return this._address1_country;
    };
    /**
     * Sets the address1_country property value. 
     * @param value Value to set for the address1_country property.
     */
    public set address1_country(value: string | undefined) {
        this._address1_country = value;
    };
    /**
     * Gets the address1_county property value. 
     * @returns a string
     */
    public get address1_county() {
        return this._address1_county;
    };
    /**
     * Sets the address1_county property value. 
     * @param value Value to set for the address1_county property.
     */
    public set address1_county(value: string | undefined) {
        this._address1_county = value;
    };
    /**
     * Gets the address1_fax property value. 
     * @returns a string
     */
    public get address1_fax() {
        return this._address1_fax;
    };
    /**
     * Sets the address1_fax property value. 
     * @param value Value to set for the address1_fax property.
     */
    public set address1_fax(value: string | undefined) {
        this._address1_fax = value;
    };
    /**
     * Gets the address1_latitude property value. 
     * @returns a double
     */
    public get address1_latitude() {
        return this._address1_latitude;
    };
    /**
     * Sets the address1_latitude property value. 
     * @param value Value to set for the address1_latitude property.
     */
    public set address1_latitude(value: number | undefined) {
        this._address1_latitude = value;
    };
    /**
     * Gets the address1_line1 property value. 
     * @returns a string
     */
    public get address1_line1() {
        return this._address1_line1;
    };
    /**
     * Sets the address1_line1 property value. 
     * @param value Value to set for the address1_line1 property.
     */
    public set address1_line1(value: string | undefined) {
        this._address1_line1 = value;
    };
    /**
     * Gets the address1_line2 property value. 
     * @returns a string
     */
    public get address1_line2() {
        return this._address1_line2;
    };
    /**
     * Sets the address1_line2 property value. 
     * @param value Value to set for the address1_line2 property.
     */
    public set address1_line2(value: string | undefined) {
        this._address1_line2 = value;
    };
    /**
     * Gets the address1_line3 property value. 
     * @returns a string
     */
    public get address1_line3() {
        return this._address1_line3;
    };
    /**
     * Sets the address1_line3 property value. 
     * @param value Value to set for the address1_line3 property.
     */
    public set address1_line3(value: string | undefined) {
        this._address1_line3 = value;
    };
    /**
     * Gets the address1_longitude property value. 
     * @returns a double
     */
    public get address1_longitude() {
        return this._address1_longitude;
    };
    /**
     * Sets the address1_longitude property value. 
     * @param value Value to set for the address1_longitude property.
     */
    public set address1_longitude(value: number | undefined) {
        this._address1_longitude = value;
    };
    /**
     * Gets the address1_name property value. 
     * @returns a string
     */
    public get address1_name() {
        return this._address1_name;
    };
    /**
     * Sets the address1_name property value. 
     * @param value Value to set for the address1_name property.
     */
    public set address1_name(value: string | undefined) {
        this._address1_name = value;
    };
    /**
     * Gets the address1_postalcode property value. 
     * @returns a string
     */
    public get address1_postalcode() {
        return this._address1_postalcode;
    };
    /**
     * Sets the address1_postalcode property value. 
     * @param value Value to set for the address1_postalcode property.
     */
    public set address1_postalcode(value: string | undefined) {
        this._address1_postalcode = value;
    };
    /**
     * Gets the address1_postofficebox property value. 
     * @returns a string
     */
    public get address1_postofficebox() {
        return this._address1_postofficebox;
    };
    /**
     * Sets the address1_postofficebox property value. 
     * @param value Value to set for the address1_postofficebox property.
     */
    public set address1_postofficebox(value: string | undefined) {
        this._address1_postofficebox = value;
    };
    /**
     * Gets the address1_shippingmethodcode property value. 
     * @returns a integer
     */
    public get address1_shippingmethodcode() {
        return this._address1_shippingmethodcode;
    };
    /**
     * Sets the address1_shippingmethodcode property value. 
     * @param value Value to set for the address1_shippingmethodcode property.
     */
    public set address1_shippingmethodcode(value: number | undefined) {
        this._address1_shippingmethodcode = value;
    };
    /**
     * Gets the address1_stateorprovince property value. 
     * @returns a string
     */
    public get address1_stateorprovince() {
        return this._address1_stateorprovince;
    };
    /**
     * Sets the address1_stateorprovince property value. 
     * @param value Value to set for the address1_stateorprovince property.
     */
    public set address1_stateorprovince(value: string | undefined) {
        this._address1_stateorprovince = value;
    };
    /**
     * Gets the address1_telephone1 property value. 
     * @returns a string
     */
    public get address1_telephone1() {
        return this._address1_telephone1;
    };
    /**
     * Sets the address1_telephone1 property value. 
     * @param value Value to set for the address1_telephone1 property.
     */
    public set address1_telephone1(value: string | undefined) {
        this._address1_telephone1 = value;
    };
    /**
     * Gets the address1_telephone2 property value. 
     * @returns a string
     */
    public get address1_telephone2() {
        return this._address1_telephone2;
    };
    /**
     * Sets the address1_telephone2 property value. 
     * @param value Value to set for the address1_telephone2 property.
     */
    public set address1_telephone2(value: string | undefined) {
        this._address1_telephone2 = value;
    };
    /**
     * Gets the address1_telephone3 property value. 
     * @returns a string
     */
    public get address1_telephone3() {
        return this._address1_telephone3;
    };
    /**
     * Sets the address1_telephone3 property value. 
     * @param value Value to set for the address1_telephone3 property.
     */
    public set address1_telephone3(value: string | undefined) {
        this._address1_telephone3 = value;
    };
    /**
     * Gets the address1_upszone property value. 
     * @returns a string
     */
    public get address1_upszone() {
        return this._address1_upszone;
    };
    /**
     * Sets the address1_upszone property value. 
     * @param value Value to set for the address1_upszone property.
     */
    public set address1_upszone(value: string | undefined) {
        this._address1_upszone = value;
    };
    /**
     * Gets the address1_utcoffset property value. 
     * @returns a integer
     */
    public get address1_utcoffset() {
        return this._address1_utcoffset;
    };
    /**
     * Sets the address1_utcoffset property value. 
     * @param value Value to set for the address1_utcoffset property.
     */
    public set address1_utcoffset(value: number | undefined) {
        this._address1_utcoffset = value;
    };
    /**
     * Gets the address2_addressid property value. 
     * @returns a string
     */
    public get address2_addressid() {
        return this._address2_addressid;
    };
    /**
     * Sets the address2_addressid property value. 
     * @param value Value to set for the address2_addressid property.
     */
    public set address2_addressid(value: string | undefined) {
        this._address2_addressid = value;
    };
    /**
     * Gets the address2_addresstypecode property value. 
     * @returns a integer
     */
    public get address2_addresstypecode() {
        return this._address2_addresstypecode;
    };
    /**
     * Sets the address2_addresstypecode property value. 
     * @param value Value to set for the address2_addresstypecode property.
     */
    public set address2_addresstypecode(value: number | undefined) {
        this._address2_addresstypecode = value;
    };
    /**
     * Gets the address2_city property value. 
     * @returns a string
     */
    public get address2_city() {
        return this._address2_city;
    };
    /**
     * Sets the address2_city property value. 
     * @param value Value to set for the address2_city property.
     */
    public set address2_city(value: string | undefined) {
        this._address2_city = value;
    };
    /**
     * Gets the address2_composite property value. 
     * @returns a string
     */
    public get address2_composite() {
        return this._address2_composite;
    };
    /**
     * Sets the address2_composite property value. 
     * @param value Value to set for the address2_composite property.
     */
    public set address2_composite(value: string | undefined) {
        this._address2_composite = value;
    };
    /**
     * Gets the address2_country property value. 
     * @returns a string
     */
    public get address2_country() {
        return this._address2_country;
    };
    /**
     * Sets the address2_country property value. 
     * @param value Value to set for the address2_country property.
     */
    public set address2_country(value: string | undefined) {
        this._address2_country = value;
    };
    /**
     * Gets the address2_county property value. 
     * @returns a string
     */
    public get address2_county() {
        return this._address2_county;
    };
    /**
     * Sets the address2_county property value. 
     * @param value Value to set for the address2_county property.
     */
    public set address2_county(value: string | undefined) {
        this._address2_county = value;
    };
    /**
     * Gets the address2_fax property value. 
     * @returns a string
     */
    public get address2_fax() {
        return this._address2_fax;
    };
    /**
     * Sets the address2_fax property value. 
     * @param value Value to set for the address2_fax property.
     */
    public set address2_fax(value: string | undefined) {
        this._address2_fax = value;
    };
    /**
     * Gets the address2_latitude property value. 
     * @returns a double
     */
    public get address2_latitude() {
        return this._address2_latitude;
    };
    /**
     * Sets the address2_latitude property value. 
     * @param value Value to set for the address2_latitude property.
     */
    public set address2_latitude(value: number | undefined) {
        this._address2_latitude = value;
    };
    /**
     * Gets the address2_line1 property value. 
     * @returns a string
     */
    public get address2_line1() {
        return this._address2_line1;
    };
    /**
     * Sets the address2_line1 property value. 
     * @param value Value to set for the address2_line1 property.
     */
    public set address2_line1(value: string | undefined) {
        this._address2_line1 = value;
    };
    /**
     * Gets the address2_line2 property value. 
     * @returns a string
     */
    public get address2_line2() {
        return this._address2_line2;
    };
    /**
     * Sets the address2_line2 property value. 
     * @param value Value to set for the address2_line2 property.
     */
    public set address2_line2(value: string | undefined) {
        this._address2_line2 = value;
    };
    /**
     * Gets the address2_line3 property value. 
     * @returns a string
     */
    public get address2_line3() {
        return this._address2_line3;
    };
    /**
     * Sets the address2_line3 property value. 
     * @param value Value to set for the address2_line3 property.
     */
    public set address2_line3(value: string | undefined) {
        this._address2_line3 = value;
    };
    /**
     * Gets the address2_longitude property value. 
     * @returns a double
     */
    public get address2_longitude() {
        return this._address2_longitude;
    };
    /**
     * Sets the address2_longitude property value. 
     * @param value Value to set for the address2_longitude property.
     */
    public set address2_longitude(value: number | undefined) {
        this._address2_longitude = value;
    };
    /**
     * Gets the address2_name property value. 
     * @returns a string
     */
    public get address2_name() {
        return this._address2_name;
    };
    /**
     * Sets the address2_name property value. 
     * @param value Value to set for the address2_name property.
     */
    public set address2_name(value: string | undefined) {
        this._address2_name = value;
    };
    /**
     * Gets the address2_postalcode property value. 
     * @returns a string
     */
    public get address2_postalcode() {
        return this._address2_postalcode;
    };
    /**
     * Sets the address2_postalcode property value. 
     * @param value Value to set for the address2_postalcode property.
     */
    public set address2_postalcode(value: string | undefined) {
        this._address2_postalcode = value;
    };
    /**
     * Gets the address2_postofficebox property value. 
     * @returns a string
     */
    public get address2_postofficebox() {
        return this._address2_postofficebox;
    };
    /**
     * Sets the address2_postofficebox property value. 
     * @param value Value to set for the address2_postofficebox property.
     */
    public set address2_postofficebox(value: string | undefined) {
        this._address2_postofficebox = value;
    };
    /**
     * Gets the address2_shippingmethodcode property value. 
     * @returns a integer
     */
    public get address2_shippingmethodcode() {
        return this._address2_shippingmethodcode;
    };
    /**
     * Sets the address2_shippingmethodcode property value. 
     * @param value Value to set for the address2_shippingmethodcode property.
     */
    public set address2_shippingmethodcode(value: number | undefined) {
        this._address2_shippingmethodcode = value;
    };
    /**
     * Gets the address2_stateorprovince property value. 
     * @returns a string
     */
    public get address2_stateorprovince() {
        return this._address2_stateorprovince;
    };
    /**
     * Sets the address2_stateorprovince property value. 
     * @param value Value to set for the address2_stateorprovince property.
     */
    public set address2_stateorprovince(value: string | undefined) {
        this._address2_stateorprovince = value;
    };
    /**
     * Gets the address2_telephone1 property value. 
     * @returns a string
     */
    public get address2_telephone1() {
        return this._address2_telephone1;
    };
    /**
     * Sets the address2_telephone1 property value. 
     * @param value Value to set for the address2_telephone1 property.
     */
    public set address2_telephone1(value: string | undefined) {
        this._address2_telephone1 = value;
    };
    /**
     * Gets the address2_telephone2 property value. 
     * @returns a string
     */
    public get address2_telephone2() {
        return this._address2_telephone2;
    };
    /**
     * Sets the address2_telephone2 property value. 
     * @param value Value to set for the address2_telephone2 property.
     */
    public set address2_telephone2(value: string | undefined) {
        this._address2_telephone2 = value;
    };
    /**
     * Gets the address2_telephone3 property value. 
     * @returns a string
     */
    public get address2_telephone3() {
        return this._address2_telephone3;
    };
    /**
     * Sets the address2_telephone3 property value. 
     * @param value Value to set for the address2_telephone3 property.
     */
    public set address2_telephone3(value: string | undefined) {
        this._address2_telephone3 = value;
    };
    /**
     * Gets the address2_upszone property value. 
     * @returns a string
     */
    public get address2_upszone() {
        return this._address2_upszone;
    };
    /**
     * Sets the address2_upszone property value. 
     * @param value Value to set for the address2_upszone property.
     */
    public set address2_upszone(value: string | undefined) {
        this._address2_upszone = value;
    };
    /**
     * Gets the address2_utcoffset property value. 
     * @returns a integer
     */
    public get address2_utcoffset() {
        return this._address2_utcoffset;
    };
    /**
     * Sets the address2_utcoffset property value. 
     * @param value Value to set for the address2_utcoffset property.
     */
    public set address2_utcoffset(value: number | undefined) {
        this._address2_utcoffset = value;
    };
    /**
     * Gets the competitor_addresses property value. 
     * @returns a competitoraddress
     */
    public get competitor_addresses() {
        return this._competitor_addresses;
    };
    /**
     * Sets the competitor_addresses property value. 
     * @param value Value to set for the competitor_addresses property.
     */
    public set competitor_addresses(value: Competitoraddress[] | undefined) {
        this._competitor_addresses = value;
    };
    /**
     * Gets the competitor_Annotation property value. 
     * @returns a annotation
     */
    public get competitor_Annotation() {
        return this._competitor_Annotation;
    };
    /**
     * Sets the competitor_Annotation property value. 
     * @param value Value to set for the Competitor_Annotation property.
     */
    public set competitor_Annotation(value: Annotation[] | undefined) {
        this._competitor_Annotation = value;
    };
    /**
     * Gets the competitor_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get competitor_AsyncOperations() {
        return this._competitor_AsyncOperations;
    };
    /**
     * Sets the competitor_AsyncOperations property value. 
     * @param value Value to set for the Competitor_AsyncOperations property.
     */
    public set competitor_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._competitor_AsyncOperations = value;
    };
    /**
     * Gets the competitor_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get competitor_BulkDeleteFailures() {
        return this._competitor_BulkDeleteFailures;
    };
    /**
     * Sets the competitor_BulkDeleteFailures property value. 
     * @param value Value to set for the Competitor_BulkDeleteFailures property.
     */
    public set competitor_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._competitor_BulkDeleteFailures = value;
    };
    /**
     * Gets the competitor_connections1 property value. 
     * @returns a connection
     */
    public get competitor_connections1() {
        return this._competitor_connections1;
    };
    /**
     * Sets the competitor_connections1 property value. 
     * @param value Value to set for the competitor_connections1 property.
     */
    public set competitor_connections1(value: Connection[] | undefined) {
        this._competitor_connections1 = value;
    };
    /**
     * Gets the competitor_connections2 property value. 
     * @returns a connection
     */
    public get competitor_connections2() {
        return this._competitor_connections2;
    };
    /**
     * Sets the competitor_connections2 property value. 
     * @param value Value to set for the competitor_connections2 property.
     */
    public set competitor_connections2(value: Connection[] | undefined) {
        this._competitor_connections2 = value;
    };
    /**
     * Gets the competitor_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get competitor_DuplicateBaseRecord() {
        return this._competitor_DuplicateBaseRecord;
    };
    /**
     * Sets the competitor_DuplicateBaseRecord property value. 
     * @param value Value to set for the Competitor_DuplicateBaseRecord property.
     */
    public set competitor_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._competitor_DuplicateBaseRecord = value;
    };
    /**
     * Gets the competitor_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get competitor_DuplicateMatchingRecord() {
        return this._competitor_DuplicateMatchingRecord;
    };
    /**
     * Sets the competitor_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Competitor_DuplicateMatchingRecord property.
     */
    public set competitor_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._competitor_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the competitor_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get competitor_MailboxTrackingFolders() {
        return this._competitor_MailboxTrackingFolders;
    };
    /**
     * Sets the competitor_MailboxTrackingFolders property value. 
     * @param value Value to set for the competitor_MailboxTrackingFolders property.
     */
    public set competitor_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._competitor_MailboxTrackingFolders = value;
    };
    /**
     * Gets the competitor_opportunity_activities property value. 
     * @returns a opportunityclose
     */
    public get competitor_opportunity_activities() {
        return this._competitor_opportunity_activities;
    };
    /**
     * Sets the competitor_opportunity_activities property value. 
     * @param value Value to set for the competitor_opportunity_activities property.
     */
    public set competitor_opportunity_activities(value: Opportunityclose[] | undefined) {
        this._competitor_opportunity_activities = value;
    };
    /**
     * Gets the competitor_PostFollows property value. 
     * @returns a postfollow
     */
    public get competitor_PostFollows() {
        return this._competitor_PostFollows;
    };
    /**
     * Sets the competitor_PostFollows property value. 
     * @param value Value to set for the competitor_PostFollows property.
     */
    public set competitor_PostFollows(value: Postfollow[] | undefined) {
        this._competitor_PostFollows = value;
    };
    /**
     * Gets the competitor_PostRegardings property value. 
     * @returns a postregarding
     */
    public get competitor_PostRegardings() {
        return this._competitor_PostRegardings;
    };
    /**
     * Sets the competitor_PostRegardings property value. 
     * @param value Value to set for the competitor_PostRegardings property.
     */
    public set competitor_PostRegardings(value: Postregarding[] | undefined) {
        this._competitor_PostRegardings = value;
    };
    /**
     * Gets the competitor_Posts property value. 
     * @returns a post
     */
    public get competitor_Posts() {
        return this._competitor_Posts;
    };
    /**
     * Sets the competitor_Posts property value. 
     * @param value Value to set for the competitor_Posts property.
     */
    public set competitor_Posts(value: Post[] | undefined) {
        this._competitor_Posts = value;
    };
    /**
     * Gets the competitor_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get competitor_principalobjectattributeaccess() {
        return this._competitor_principalobjectattributeaccess;
    };
    /**
     * Sets the competitor_principalobjectattributeaccess property value. 
     * @param value Value to set for the competitor_principalobjectattributeaccess property.
     */
    public set competitor_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._competitor_principalobjectattributeaccess = value;
    };
    /**
     * Gets the competitor_ProcessSessions property value. 
     * @returns a processsession
     */
    public get competitor_ProcessSessions() {
        return this._competitor_ProcessSessions;
    };
    /**
     * Sets the competitor_ProcessSessions property value. 
     * @param value Value to set for the Competitor_ProcessSessions property.
     */
    public set competitor_ProcessSessions(value: Processsession[] | undefined) {
        this._competitor_ProcessSessions = value;
    };
    /**
     * Gets the competitor_SyncErrors property value. 
     * @returns a syncerror
     */
    public get competitor_SyncErrors() {
        return this._competitor_SyncErrors;
    };
    /**
     * Sets the competitor_SyncErrors property value. 
     * @param value Value to set for the Competitor_SyncErrors property.
     */
    public set competitor_SyncErrors(value: Syncerror[] | undefined) {
        this._competitor_SyncErrors = value;
    };
    /**
     * Gets the competitorid property value. 
     * @returns a string
     */
    public get competitorid() {
        return this._competitorid;
    };
    /**
     * Sets the competitorid property value. 
     * @param value Value to set for the competitorid property.
     */
    public set competitorid(value: string | undefined) {
        this._competitorid = value;
    };
    /**
     * Gets the competitorproduct_association property value. 
     * @returns a product
     */
    public get competitorproduct_association() {
        return this._competitorproduct_association;
    };
    /**
     * Sets the competitorproduct_association property value. 
     * @param value Value to set for the competitorproduct_association property.
     */
    public set competitorproduct_association(value: Product[] | undefined) {
        this._competitorproduct_association = value;
    };
    /**
     * Gets the competitorsalesliterature_association property value. 
     * @returns a salesliterature
     */
    public get competitorsalesliterature_association() {
        return this._competitorsalesliterature_association;
    };
    /**
     * Sets the competitorsalesliterature_association property value. 
     * @param value Value to set for the competitorsalesliterature_association property.
     */
    public set competitorsalesliterature_association(value: Salesliterature[] | undefined) {
        this._competitorsalesliterature_association = value;
    };
    /**
     * Instantiates a new competitor and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Competitor)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Competitor)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Competitor)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Competitor)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Competitor)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Competitor)._transactioncurrencyid_value = n.getStringValue(); },
            "address1_addressid": (o, n) => { (o as unknown as Competitor).address1_addressid = n.getStringValue(); },
            "address1_addresstypecode": (o, n) => { (o as unknown as Competitor).address1_addresstypecode = n.getNumberValue(); },
            "address1_city": (o, n) => { (o as unknown as Competitor).address1_city = n.getStringValue(); },
            "address1_composite": (o, n) => { (o as unknown as Competitor).address1_composite = n.getStringValue(); },
            "address1_country": (o, n) => { (o as unknown as Competitor).address1_country = n.getStringValue(); },
            "address1_county": (o, n) => { (o as unknown as Competitor).address1_county = n.getStringValue(); },
            "address1_fax": (o, n) => { (o as unknown as Competitor).address1_fax = n.getStringValue(); },
            "address1_latitude": (o, n) => { (o as unknown as Competitor).address1_latitude = n.getNumberValue(); },
            "address1_line1": (o, n) => { (o as unknown as Competitor).address1_line1 = n.getStringValue(); },
            "address1_line2": (o, n) => { (o as unknown as Competitor).address1_line2 = n.getStringValue(); },
            "address1_line3": (o, n) => { (o as unknown as Competitor).address1_line3 = n.getStringValue(); },
            "address1_longitude": (o, n) => { (o as unknown as Competitor).address1_longitude = n.getNumberValue(); },
            "address1_name": (o, n) => { (o as unknown as Competitor).address1_name = n.getStringValue(); },
            "address1_postalcode": (o, n) => { (o as unknown as Competitor).address1_postalcode = n.getStringValue(); },
            "address1_postofficebox": (o, n) => { (o as unknown as Competitor).address1_postofficebox = n.getStringValue(); },
            "address1_shippingmethodcode": (o, n) => { (o as unknown as Competitor).address1_shippingmethodcode = n.getNumberValue(); },
            "address1_stateorprovince": (o, n) => { (o as unknown as Competitor).address1_stateorprovince = n.getStringValue(); },
            "address1_telephone1": (o, n) => { (o as unknown as Competitor).address1_telephone1 = n.getStringValue(); },
            "address1_telephone2": (o, n) => { (o as unknown as Competitor).address1_telephone2 = n.getStringValue(); },
            "address1_telephone3": (o, n) => { (o as unknown as Competitor).address1_telephone3 = n.getStringValue(); },
            "address1_upszone": (o, n) => { (o as unknown as Competitor).address1_upszone = n.getStringValue(); },
            "address1_utcoffset": (o, n) => { (o as unknown as Competitor).address1_utcoffset = n.getNumberValue(); },
            "address2_addressid": (o, n) => { (o as unknown as Competitor).address2_addressid = n.getStringValue(); },
            "address2_addresstypecode": (o, n) => { (o as unknown as Competitor).address2_addresstypecode = n.getNumberValue(); },
            "address2_city": (o, n) => { (o as unknown as Competitor).address2_city = n.getStringValue(); },
            "address2_composite": (o, n) => { (o as unknown as Competitor).address2_composite = n.getStringValue(); },
            "address2_country": (o, n) => { (o as unknown as Competitor).address2_country = n.getStringValue(); },
            "address2_county": (o, n) => { (o as unknown as Competitor).address2_county = n.getStringValue(); },
            "address2_fax": (o, n) => { (o as unknown as Competitor).address2_fax = n.getStringValue(); },
            "address2_latitude": (o, n) => { (o as unknown as Competitor).address2_latitude = n.getNumberValue(); },
            "address2_line1": (o, n) => { (o as unknown as Competitor).address2_line1 = n.getStringValue(); },
            "address2_line2": (o, n) => { (o as unknown as Competitor).address2_line2 = n.getStringValue(); },
            "address2_line3": (o, n) => { (o as unknown as Competitor).address2_line3 = n.getStringValue(); },
            "address2_longitude": (o, n) => { (o as unknown as Competitor).address2_longitude = n.getNumberValue(); },
            "address2_name": (o, n) => { (o as unknown as Competitor).address2_name = n.getStringValue(); },
            "address2_postalcode": (o, n) => { (o as unknown as Competitor).address2_postalcode = n.getStringValue(); },
            "address2_postofficebox": (o, n) => { (o as unknown as Competitor).address2_postofficebox = n.getStringValue(); },
            "address2_shippingmethodcode": (o, n) => { (o as unknown as Competitor).address2_shippingmethodcode = n.getNumberValue(); },
            "address2_stateorprovince": (o, n) => { (o as unknown as Competitor).address2_stateorprovince = n.getStringValue(); },
            "address2_telephone1": (o, n) => { (o as unknown as Competitor).address2_telephone1 = n.getStringValue(); },
            "address2_telephone2": (o, n) => { (o as unknown as Competitor).address2_telephone2 = n.getStringValue(); },
            "address2_telephone3": (o, n) => { (o as unknown as Competitor).address2_telephone3 = n.getStringValue(); },
            "address2_upszone": (o, n) => { (o as unknown as Competitor).address2_upszone = n.getStringValue(); },
            "address2_utcoffset": (o, n) => { (o as unknown as Competitor).address2_utcoffset = n.getNumberValue(); },
            "competitor_addresses": (o, n) => { (o as unknown as Competitor).competitor_addresses = n.getCollectionOfObjectValues<Competitoraddress>(createCompetitoraddressFromDiscriminatorValue); },
            "competitor_Annotation": (o, n) => { (o as unknown as Competitor).competitor_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "competitor_AsyncOperations": (o, n) => { (o as unknown as Competitor).competitor_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "competitor_BulkDeleteFailures": (o, n) => { (o as unknown as Competitor).competitor_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "competitor_connections1": (o, n) => { (o as unknown as Competitor).competitor_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "competitor_connections2": (o, n) => { (o as unknown as Competitor).competitor_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "competitor_DuplicateBaseRecord": (o, n) => { (o as unknown as Competitor).competitor_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "competitor_DuplicateMatchingRecord": (o, n) => { (o as unknown as Competitor).competitor_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "competitor_MailboxTrackingFolders": (o, n) => { (o as unknown as Competitor).competitor_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "competitor_opportunity_activities": (o, n) => { (o as unknown as Competitor).competitor_opportunity_activities = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "competitor_PostFollows": (o, n) => { (o as unknown as Competitor).competitor_PostFollows = n.getCollectionOfObjectValues<Postfollow>(createPostfollowFromDiscriminatorValue); },
            "competitor_PostRegardings": (o, n) => { (o as unknown as Competitor).competitor_PostRegardings = n.getCollectionOfObjectValues<Postregarding>(createPostregardingFromDiscriminatorValue); },
            "competitor_Posts": (o, n) => { (o as unknown as Competitor).competitor_Posts = n.getCollectionOfObjectValues<Post>(createPostFromDiscriminatorValue); },
            "competitor_principalobjectattributeaccess": (o, n) => { (o as unknown as Competitor).competitor_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "competitor_ProcessSessions": (o, n) => { (o as unknown as Competitor).competitor_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "competitor_SyncErrors": (o, n) => { (o as unknown as Competitor).competitor_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "competitorid": (o, n) => { (o as unknown as Competitor).competitorid = n.getStringValue(); },
            "competitorproduct_association": (o, n) => { (o as unknown as Competitor).competitorproduct_association = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "competitorsalesliterature_association": (o, n) => { (o as unknown as Competitor).competitorsalesliterature_association = n.getCollectionOfObjectValues<Salesliterature>(createSalesliteratureFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Competitor).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Competitor).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Competitor).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityimage": (o, n) => { (o as unknown as Competitor).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Competitor).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Competitor).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Competitor).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Competitor).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Competitor).importsequencenumber = n.getNumberValue(); },
            "keyproduct": (o, n) => { (o as unknown as Competitor).keyproduct = n.getStringValue(); },
            "leadcompetitors_association": (o, n) => { (o as unknown as Competitor).leadcompetitors_association = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Competitor).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Competitor).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Competitor).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_gdproptout": (o, n) => { (o as unknown as Competitor).msdyn_gdproptout = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Competitor).name = n.getStringValue(); },
            "opportunities": (o, n) => { (o as unknown as Competitor).opportunities = n.getStringValue(); },
            "opportunitycompetitors_association": (o, n) => { (o as unknown as Competitor).opportunitycompetitors_association = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Competitor).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Competitor).overriddencreatedon = n.getDateValue(); },
            "overview": (o, n) => { (o as unknown as Competitor).overview = n.getStringValue(); },
            "processid": (o, n) => { (o as unknown as Competitor).processid = n.getStringValue(); },
            "referenceinfourl": (o, n) => { (o as unknown as Competitor).referenceinfourl = n.getStringValue(); },
            "reportedrevenue": (o, n) => { (o as unknown as Competitor).reportedrevenue = n.getNumberValue(); },
            "reportedrevenue_base": (o, n) => { (o as unknown as Competitor).reportedrevenue_base = n.getNumberValue(); },
            "reportingquarter": (o, n) => { (o as unknown as Competitor).reportingquarter = n.getNumberValue(); },
            "reportingyear": (o, n) => { (o as unknown as Competitor).reportingyear = n.getNumberValue(); },
            "stageid": (o, n) => { (o as unknown as Competitor).stageid = n.getStringValue(); },
            "stageid_processstage": (o, n) => { (o as unknown as Competitor).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "stockexchange": (o, n) => { (o as unknown as Competitor).stockexchange = n.getStringValue(); },
            "strengths": (o, n) => { (o as unknown as Competitor).strengths = n.getStringValue(); },
            "threats": (o, n) => { (o as unknown as Competitor).threats = n.getStringValue(); },
            "tickersymbol": (o, n) => { (o as unknown as Competitor).tickersymbol = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Competitor).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Competitor).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Competitor).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Competitor).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Competitor).versionnumber = n.getNumberValue(); },
            "weaknesses": (o, n) => { (o as unknown as Competitor).weaknesses = n.getStringValue(); },
            "websiteurl": (o, n) => { (o as unknown as Competitor).websiteurl = n.getStringValue(); },
            "winpercentage": (o, n) => { (o as unknown as Competitor).winpercentage = n.getNumberValue(); },
            "yominame": (o, n) => { (o as unknown as Competitor).yominame = n.getStringValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the keyproduct property value. 
     * @returns a string
     */
    public get keyproduct() {
        return this._keyproduct;
    };
    /**
     * Sets the keyproduct property value. 
     * @param value Value to set for the keyproduct property.
     */
    public set keyproduct(value: string | undefined) {
        this._keyproduct = value;
    };
    /**
     * Gets the leadcompetitors_association property value. 
     * @returns a lead
     */
    public get leadcompetitors_association() {
        return this._leadcompetitors_association;
    };
    /**
     * Sets the leadcompetitors_association property value. 
     * @param value Value to set for the leadcompetitors_association property.
     */
    public set leadcompetitors_association(value: Lead[] | undefined) {
        this._leadcompetitors_association = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_gdproptout property value. 
     * @returns a boolean
     */
    public get msdyn_gdproptout() {
        return this._msdyn_gdproptout;
    };
    /**
     * Sets the msdyn_gdproptout property value. 
     * @param value Value to set for the msdyn_gdproptout property.
     */
    public set msdyn_gdproptout(value: boolean | undefined) {
        this._msdyn_gdproptout = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the opportunities property value. 
     * @returns a string
     */
    public get opportunities() {
        return this._opportunities;
    };
    /**
     * Sets the opportunities property value. 
     * @param value Value to set for the opportunities property.
     */
    public set opportunities(value: string | undefined) {
        this._opportunities = value;
    };
    /**
     * Gets the opportunitycompetitors_association property value. 
     * @returns a opportunity
     */
    public get opportunitycompetitors_association() {
        return this._opportunitycompetitors_association;
    };
    /**
     * Sets the opportunitycompetitors_association property value. 
     * @param value Value to set for the opportunitycompetitors_association property.
     */
    public set opportunitycompetitors_association(value: Opportunity[] | undefined) {
        this._opportunitycompetitors_association = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the overview property value. 
     * @returns a string
     */
    public get overview() {
        return this._overview;
    };
    /**
     * Sets the overview property value. 
     * @param value Value to set for the overview property.
     */
    public set overview(value: string | undefined) {
        this._overview = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Gets the referenceinfourl property value. 
     * @returns a string
     */
    public get referenceinfourl() {
        return this._referenceinfourl;
    };
    /**
     * Sets the referenceinfourl property value. 
     * @param value Value to set for the referenceinfourl property.
     */
    public set referenceinfourl(value: string | undefined) {
        this._referenceinfourl = value;
    };
    /**
     * Gets the reportedrevenue property value. 
     * @returns a int64
     */
    public get reportedrevenue() {
        return this._reportedrevenue;
    };
    /**
     * Sets the reportedrevenue property value. 
     * @param value Value to set for the reportedrevenue property.
     */
    public set reportedrevenue(value: number | undefined) {
        this._reportedrevenue = value;
    };
    /**
     * Gets the reportedrevenue_base property value. 
     * @returns a int64
     */
    public get reportedrevenue_base() {
        return this._reportedrevenue_base;
    };
    /**
     * Sets the reportedrevenue_base property value. 
     * @param value Value to set for the reportedrevenue_base property.
     */
    public set reportedrevenue_base(value: number | undefined) {
        this._reportedrevenue_base = value;
    };
    /**
     * Gets the reportingquarter property value. 
     * @returns a integer
     */
    public get reportingquarter() {
        return this._reportingquarter;
    };
    /**
     * Sets the reportingquarter property value. 
     * @param value Value to set for the reportingquarter property.
     */
    public set reportingquarter(value: number | undefined) {
        this._reportingquarter = value;
    };
    /**
     * Gets the reportingyear property value. 
     * @returns a integer
     */
    public get reportingyear() {
        return this._reportingyear;
    };
    /**
     * Sets the reportingyear property value. 
     * @param value Value to set for the reportingyear property.
     */
    public set reportingyear(value: number | undefined) {
        this._reportingyear = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("address1_addressid", this.address1_addressid);
        writer.writeNumberValue("address1_addresstypecode", this.address1_addresstypecode);
        writer.writeStringValue("address1_city", this.address1_city);
        writer.writeStringValue("address1_composite", this.address1_composite);
        writer.writeStringValue("address1_country", this.address1_country);
        writer.writeStringValue("address1_county", this.address1_county);
        writer.writeStringValue("address1_fax", this.address1_fax);
        writer.writeNumberValue("address1_latitude", this.address1_latitude);
        writer.writeStringValue("address1_line1", this.address1_line1);
        writer.writeStringValue("address1_line2", this.address1_line2);
        writer.writeStringValue("address1_line3", this.address1_line3);
        writer.writeNumberValue("address1_longitude", this.address1_longitude);
        writer.writeStringValue("address1_name", this.address1_name);
        writer.writeStringValue("address1_postalcode", this.address1_postalcode);
        writer.writeStringValue("address1_postofficebox", this.address1_postofficebox);
        writer.writeNumberValue("address1_shippingmethodcode", this.address1_shippingmethodcode);
        writer.writeStringValue("address1_stateorprovince", this.address1_stateorprovince);
        writer.writeStringValue("address1_telephone1", this.address1_telephone1);
        writer.writeStringValue("address1_telephone2", this.address1_telephone2);
        writer.writeStringValue("address1_telephone3", this.address1_telephone3);
        writer.writeStringValue("address1_upszone", this.address1_upszone);
        writer.writeNumberValue("address1_utcoffset", this.address1_utcoffset);
        writer.writeStringValue("address2_addressid", this.address2_addressid);
        writer.writeNumberValue("address2_addresstypecode", this.address2_addresstypecode);
        writer.writeStringValue("address2_city", this.address2_city);
        writer.writeStringValue("address2_composite", this.address2_composite);
        writer.writeStringValue("address2_country", this.address2_country);
        writer.writeStringValue("address2_county", this.address2_county);
        writer.writeStringValue("address2_fax", this.address2_fax);
        writer.writeNumberValue("address2_latitude", this.address2_latitude);
        writer.writeStringValue("address2_line1", this.address2_line1);
        writer.writeStringValue("address2_line2", this.address2_line2);
        writer.writeStringValue("address2_line3", this.address2_line3);
        writer.writeNumberValue("address2_longitude", this.address2_longitude);
        writer.writeStringValue("address2_name", this.address2_name);
        writer.writeStringValue("address2_postalcode", this.address2_postalcode);
        writer.writeStringValue("address2_postofficebox", this.address2_postofficebox);
        writer.writeNumberValue("address2_shippingmethodcode", this.address2_shippingmethodcode);
        writer.writeStringValue("address2_stateorprovince", this.address2_stateorprovince);
        writer.writeStringValue("address2_telephone1", this.address2_telephone1);
        writer.writeStringValue("address2_telephone2", this.address2_telephone2);
        writer.writeStringValue("address2_telephone3", this.address2_telephone3);
        writer.writeStringValue("address2_upszone", this.address2_upszone);
        writer.writeNumberValue("address2_utcoffset", this.address2_utcoffset);
        writer.writeCollectionOfObjectValues<Competitoraddress>("competitor_addresses", this.competitor_addresses);
        writer.writeCollectionOfObjectValues<Annotation>("competitor_Annotation", this.competitor_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("competitor_AsyncOperations", this.competitor_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("competitor_BulkDeleteFailures", this.competitor_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("competitor_connections1", this.competitor_connections1);
        writer.writeCollectionOfObjectValues<Connection>("competitor_connections2", this.competitor_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("competitor_DuplicateBaseRecord", this.competitor_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("competitor_DuplicateMatchingRecord", this.competitor_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("competitor_MailboxTrackingFolders", this.competitor_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Opportunityclose>("competitor_opportunity_activities", this.competitor_opportunity_activities);
        writer.writeCollectionOfObjectValues<Postfollow>("competitor_PostFollows", this.competitor_PostFollows);
        writer.writeCollectionOfObjectValues<Postregarding>("competitor_PostRegardings", this.competitor_PostRegardings);
        writer.writeCollectionOfObjectValues<Post>("competitor_Posts", this.competitor_Posts);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("competitor_principalobjectattributeaccess", this.competitor_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("competitor_ProcessSessions", this.competitor_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("competitor_SyncErrors", this.competitor_SyncErrors);
        writer.writeStringValue("competitorid", this.competitorid);
        writer.writeCollectionOfObjectValues<Product>("competitorproduct_association", this.competitorproduct_association);
        writer.writeCollectionOfObjectValues<Salesliterature>("competitorsalesliterature_association", this.competitorsalesliterature_association);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("keyproduct", this.keyproduct);
        writer.writeCollectionOfObjectValues<Lead>("leadcompetitors_association", this.leadcompetitors_association);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_gdproptout", this.msdyn_gdproptout);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("opportunities", this.opportunities);
        writer.writeCollectionOfObjectValues<Opportunity>("opportunitycompetitors_association", this.opportunitycompetitors_association);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("overview", this.overview);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("referenceinfourl", this.referenceinfourl);
        writer.writeNumberValue("reportedrevenue", this.reportedrevenue);
        writer.writeNumberValue("reportedrevenue_base", this.reportedrevenue_base);
        writer.writeNumberValue("reportingquarter", this.reportingquarter);
        writer.writeNumberValue("reportingyear", this.reportingyear);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeStringValue("stockexchange", this.stockexchange);
        writer.writeStringValue("strengths", this.strengths);
        writer.writeStringValue("threats", this.threats);
        writer.writeStringValue("tickersymbol", this.tickersymbol);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("weaknesses", this.weaknesses);
        writer.writeStringValue("websiteurl", this.websiteurl);
        writer.writeNumberValue("winpercentage", this.winpercentage);
        writer.writeStringValue("yominame", this.yominame);
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the stageid_processstage property value. 
     * @returns a processstage
     */
    public get stageid_processstage() {
        return this._stageid_processstage;
    };
    /**
     * Sets the stageid_processstage property value. 
     * @param value Value to set for the stageid_processstage property.
     */
    public set stageid_processstage(value: Processstage | undefined) {
        this._stageid_processstage = value;
    };
    /**
     * Gets the stockexchange property value. 
     * @returns a string
     */
    public get stockexchange() {
        return this._stockexchange;
    };
    /**
     * Sets the stockexchange property value. 
     * @param value Value to set for the stockexchange property.
     */
    public set stockexchange(value: string | undefined) {
        this._stockexchange = value;
    };
    /**
     * Gets the strengths property value. 
     * @returns a string
     */
    public get strengths() {
        return this._strengths;
    };
    /**
     * Sets the strengths property value. 
     * @param value Value to set for the strengths property.
     */
    public set strengths(value: string | undefined) {
        this._strengths = value;
    };
    /**
     * Gets the threats property value. 
     * @returns a string
     */
    public get threats() {
        return this._threats;
    };
    /**
     * Sets the threats property value. 
     * @param value Value to set for the threats property.
     */
    public set threats(value: string | undefined) {
        this._threats = value;
    };
    /**
     * Gets the tickersymbol property value. 
     * @returns a string
     */
    public get tickersymbol() {
        return this._tickersymbol;
    };
    /**
     * Sets the tickersymbol property value. 
     * @param value Value to set for the tickersymbol property.
     */
    public set tickersymbol(value: string | undefined) {
        this._tickersymbol = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
    /**
     * Gets the weaknesses property value. 
     * @returns a string
     */
    public get weaknesses() {
        return this._weaknesses;
    };
    /**
     * Sets the weaknesses property value. 
     * @param value Value to set for the weaknesses property.
     */
    public set weaknesses(value: string | undefined) {
        this._weaknesses = value;
    };
    /**
     * Gets the websiteurl property value. 
     * @returns a string
     */
    public get websiteurl() {
        return this._websiteurl;
    };
    /**
     * Sets the websiteurl property value. 
     * @param value Value to set for the websiteurl property.
     */
    public set websiteurl(value: string | undefined) {
        this._websiteurl = value;
    };
    /**
     * Gets the winpercentage property value. 
     * @returns a double
     */
    public get winpercentage() {
        return this._winpercentage;
    };
    /**
     * Sets the winpercentage property value. 
     * @param value Value to set for the winpercentage property.
     */
    public set winpercentage(value: number | undefined) {
        this._winpercentage = value;
    };
    /**
     * Gets the yominame property value. 
     * @returns a string
     */
    public get yominame() {
        return this._yominame;
    };
    /**
     * Sets the yominame property value. 
     * @param value Value to set for the yominame property.
     */
    public set yominame(value: string | undefined) {
        this._yominame = value;
    };
}
