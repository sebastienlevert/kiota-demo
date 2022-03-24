import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPublisheraddressFromDiscriminatorValue} from './createPublisheraddressFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appmodule, Crmbaseentity, Duplicaterecord, Organization, Publisheraddress, Solution, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Publisher extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _address1_addressid?: string | undefined;
    private _address1_addresstypecode?: number | undefined;
    private _address1_city?: string | undefined;
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
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customizationoptionvalueprefix?: number | undefined;
    private _customizationprefix?: string | undefined;
    private _description?: string | undefined;
    private _emailaddress?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _friendlyname?: string | undefined;
    private _isreadonly?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _pinpointpublisherdefaultlocale?: string | undefined;
    private _pinpointpublisherid?: number | undefined;
    private _publisher_appmodule?: Appmodule[] | undefined;
    private _publisher_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _publisher_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _publisher_PublisherAddress?: Publisheraddress[] | undefined;
    private _publisher_solution?: Solution[] | undefined;
    private _publisher_SyncErrors?: Syncerror[] | undefined;
    private _publisherid?: string | undefined;
    private _supportingwebsiteurl?: string | undefined;
    private _uniquename?: string | undefined;
    private _versionnumber?: number | undefined;
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
     * Instantiates a new publisher and sets the default values.
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
     * Gets the customizationoptionvalueprefix property value. 
     * @returns a integer
     */
    public get customizationoptionvalueprefix() {
        return this._customizationoptionvalueprefix;
    };
    /**
     * Sets the customizationoptionvalueprefix property value. 
     * @param value Value to set for the customizationoptionvalueprefix property.
     */
    public set customizationoptionvalueprefix(value: number | undefined) {
        this._customizationoptionvalueprefix = value;
    };
    /**
     * Gets the customizationprefix property value. 
     * @returns a string
     */
    public get customizationprefix() {
        return this._customizationprefix;
    };
    /**
     * Sets the customizationprefix property value. 
     * @param value Value to set for the customizationprefix property.
     */
    public set customizationprefix(value: string | undefined) {
        this._customizationprefix = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
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
     * Gets the friendlyname property value. 
     * @returns a string
     */
    public get friendlyname() {
        return this._friendlyname;
    };
    /**
     * Sets the friendlyname property value. 
     * @param value Value to set for the friendlyname property.
     */
    public set friendlyname(value: string | undefined) {
        this._friendlyname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Publisher)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Publisher)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Publisher)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Publisher)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Publisher)._organizationid_value = n.getStringValue(); },
            "address1_addressid": (o, n) => { (o as unknown as Publisher).address1_addressid = n.getStringValue(); },
            "address1_addresstypecode": (o, n) => { (o as unknown as Publisher).address1_addresstypecode = n.getNumberValue(); },
            "address1_city": (o, n) => { (o as unknown as Publisher).address1_city = n.getStringValue(); },
            "address1_country": (o, n) => { (o as unknown as Publisher).address1_country = n.getStringValue(); },
            "address1_county": (o, n) => { (o as unknown as Publisher).address1_county = n.getStringValue(); },
            "address1_fax": (o, n) => { (o as unknown as Publisher).address1_fax = n.getStringValue(); },
            "address1_latitude": (o, n) => { (o as unknown as Publisher).address1_latitude = n.getNumberValue(); },
            "address1_line1": (o, n) => { (o as unknown as Publisher).address1_line1 = n.getStringValue(); },
            "address1_line2": (o, n) => { (o as unknown as Publisher).address1_line2 = n.getStringValue(); },
            "address1_line3": (o, n) => { (o as unknown as Publisher).address1_line3 = n.getStringValue(); },
            "address1_longitude": (o, n) => { (o as unknown as Publisher).address1_longitude = n.getNumberValue(); },
            "address1_name": (o, n) => { (o as unknown as Publisher).address1_name = n.getStringValue(); },
            "address1_postalcode": (o, n) => { (o as unknown as Publisher).address1_postalcode = n.getStringValue(); },
            "address1_postofficebox": (o, n) => { (o as unknown as Publisher).address1_postofficebox = n.getStringValue(); },
            "address1_shippingmethodcode": (o, n) => { (o as unknown as Publisher).address1_shippingmethodcode = n.getNumberValue(); },
            "address1_stateorprovince": (o, n) => { (o as unknown as Publisher).address1_stateorprovince = n.getStringValue(); },
            "address1_telephone1": (o, n) => { (o as unknown as Publisher).address1_telephone1 = n.getStringValue(); },
            "address1_telephone2": (o, n) => { (o as unknown as Publisher).address1_telephone2 = n.getStringValue(); },
            "address1_telephone3": (o, n) => { (o as unknown as Publisher).address1_telephone3 = n.getStringValue(); },
            "address1_upszone": (o, n) => { (o as unknown as Publisher).address1_upszone = n.getStringValue(); },
            "address1_utcoffset": (o, n) => { (o as unknown as Publisher).address1_utcoffset = n.getNumberValue(); },
            "address2_addressid": (o, n) => { (o as unknown as Publisher).address2_addressid = n.getStringValue(); },
            "address2_addresstypecode": (o, n) => { (o as unknown as Publisher).address2_addresstypecode = n.getNumberValue(); },
            "address2_city": (o, n) => { (o as unknown as Publisher).address2_city = n.getStringValue(); },
            "address2_country": (o, n) => { (o as unknown as Publisher).address2_country = n.getStringValue(); },
            "address2_county": (o, n) => { (o as unknown as Publisher).address2_county = n.getStringValue(); },
            "address2_fax": (o, n) => { (o as unknown as Publisher).address2_fax = n.getStringValue(); },
            "address2_latitude": (o, n) => { (o as unknown as Publisher).address2_latitude = n.getNumberValue(); },
            "address2_line1": (o, n) => { (o as unknown as Publisher).address2_line1 = n.getStringValue(); },
            "address2_line2": (o, n) => { (o as unknown as Publisher).address2_line2 = n.getStringValue(); },
            "address2_line3": (o, n) => { (o as unknown as Publisher).address2_line3 = n.getStringValue(); },
            "address2_longitude": (o, n) => { (o as unknown as Publisher).address2_longitude = n.getNumberValue(); },
            "address2_name": (o, n) => { (o as unknown as Publisher).address2_name = n.getStringValue(); },
            "address2_postalcode": (o, n) => { (o as unknown as Publisher).address2_postalcode = n.getStringValue(); },
            "address2_postofficebox": (o, n) => { (o as unknown as Publisher).address2_postofficebox = n.getStringValue(); },
            "address2_shippingmethodcode": (o, n) => { (o as unknown as Publisher).address2_shippingmethodcode = n.getNumberValue(); },
            "address2_stateorprovince": (o, n) => { (o as unknown as Publisher).address2_stateorprovince = n.getStringValue(); },
            "address2_telephone1": (o, n) => { (o as unknown as Publisher).address2_telephone1 = n.getStringValue(); },
            "address2_telephone2": (o, n) => { (o as unknown as Publisher).address2_telephone2 = n.getStringValue(); },
            "address2_telephone3": (o, n) => { (o as unknown as Publisher).address2_telephone3 = n.getStringValue(); },
            "address2_upszone": (o, n) => { (o as unknown as Publisher).address2_upszone = n.getStringValue(); },
            "address2_utcoffset": (o, n) => { (o as unknown as Publisher).address2_utcoffset = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Publisher).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Publisher).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Publisher).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customizationoptionvalueprefix": (o, n) => { (o as unknown as Publisher).customizationoptionvalueprefix = n.getNumberValue(); },
            "customizationprefix": (o, n) => { (o as unknown as Publisher).customizationprefix = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Publisher).description = n.getStringValue(); },
            "emailaddress": (o, n) => { (o as unknown as Publisher).emailaddress = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Publisher).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Publisher).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Publisher).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Publisher).entityimageid = n.getStringValue(); },
            "friendlyname": (o, n) => { (o as unknown as Publisher).friendlyname = n.getStringValue(); },
            "isreadonly": (o, n) => { (o as unknown as Publisher).isreadonly = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Publisher).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Publisher).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Publisher).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Publisher).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "pinpointpublisherdefaultlocale": (o, n) => { (o as unknown as Publisher).pinpointpublisherdefaultlocale = n.getStringValue(); },
            "pinpointpublisherid": (o, n) => { (o as unknown as Publisher).pinpointpublisherid = n.getNumberValue(); },
            "publisher_appmodule": (o, n) => { (o as unknown as Publisher).publisher_appmodule = n.getCollectionOfObjectValues<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "publisher_DuplicateBaseRecord": (o, n) => { (o as unknown as Publisher).publisher_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "publisher_DuplicateMatchingRecord": (o, n) => { (o as unknown as Publisher).publisher_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "publisher_PublisherAddress": (o, n) => { (o as unknown as Publisher).publisher_PublisherAddress = n.getCollectionOfObjectValues<Publisheraddress>(createPublisheraddressFromDiscriminatorValue); },
            "publisher_solution": (o, n) => { (o as unknown as Publisher).publisher_solution = n.getCollectionOfObjectValues<Solution>(createSolutionFromDiscriminatorValue); },
            "publisher_SyncErrors": (o, n) => { (o as unknown as Publisher).publisher_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "publisherid": (o, n) => { (o as unknown as Publisher).publisherid = n.getStringValue(); },
            "supportingwebsiteurl": (o, n) => { (o as unknown as Publisher).supportingwebsiteurl = n.getStringValue(); },
            "uniquename": (o, n) => { (o as unknown as Publisher).uniquename = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Publisher).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isreadonly property value. 
     * @returns a boolean
     */
    public get isreadonly() {
        return this._isreadonly;
    };
    /**
     * Sets the isreadonly property value. 
     * @param value Value to set for the isreadonly property.
     */
    public set isreadonly(value: boolean | undefined) {
        this._isreadonly = value;
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
     * Gets the pinpointpublisherdefaultlocale property value. 
     * @returns a string
     */
    public get pinpointpublisherdefaultlocale() {
        return this._pinpointpublisherdefaultlocale;
    };
    /**
     * Sets the pinpointpublisherdefaultlocale property value. 
     * @param value Value to set for the pinpointpublisherdefaultlocale property.
     */
    public set pinpointpublisherdefaultlocale(value: string | undefined) {
        this._pinpointpublisherdefaultlocale = value;
    };
    /**
     * Gets the pinpointpublisherid property value. 
     * @returns a int64
     */
    public get pinpointpublisherid() {
        return this._pinpointpublisherid;
    };
    /**
     * Sets the pinpointpublisherid property value. 
     * @param value Value to set for the pinpointpublisherid property.
     */
    public set pinpointpublisherid(value: number | undefined) {
        this._pinpointpublisherid = value;
    };
    /**
     * Gets the publisher_appmodule property value. 
     * @returns a appmodule
     */
    public get publisher_appmodule() {
        return this._publisher_appmodule;
    };
    /**
     * Sets the publisher_appmodule property value. 
     * @param value Value to set for the publisher_appmodule property.
     */
    public set publisher_appmodule(value: Appmodule[] | undefined) {
        this._publisher_appmodule = value;
    };
    /**
     * Gets the publisher_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get publisher_DuplicateBaseRecord() {
        return this._publisher_DuplicateBaseRecord;
    };
    /**
     * Sets the publisher_DuplicateBaseRecord property value. 
     * @param value Value to set for the Publisher_DuplicateBaseRecord property.
     */
    public set publisher_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._publisher_DuplicateBaseRecord = value;
    };
    /**
     * Gets the publisher_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get publisher_DuplicateMatchingRecord() {
        return this._publisher_DuplicateMatchingRecord;
    };
    /**
     * Sets the publisher_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Publisher_DuplicateMatchingRecord property.
     */
    public set publisher_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._publisher_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the publisher_PublisherAddress property value. 
     * @returns a publisheraddress
     */
    public get publisher_PublisherAddress() {
        return this._publisher_PublisherAddress;
    };
    /**
     * Sets the publisher_PublisherAddress property value. 
     * @param value Value to set for the Publisher_PublisherAddress property.
     */
    public set publisher_PublisherAddress(value: Publisheraddress[] | undefined) {
        this._publisher_PublisherAddress = value;
    };
    /**
     * Gets the publisher_solution property value. 
     * @returns a solution
     */
    public get publisher_solution() {
        return this._publisher_solution;
    };
    /**
     * Sets the publisher_solution property value. 
     * @param value Value to set for the publisher_solution property.
     */
    public set publisher_solution(value: Solution[] | undefined) {
        this._publisher_solution = value;
    };
    /**
     * Gets the publisher_SyncErrors property value. 
     * @returns a syncerror
     */
    public get publisher_SyncErrors() {
        return this._publisher_SyncErrors;
    };
    /**
     * Sets the publisher_SyncErrors property value. 
     * @param value Value to set for the Publisher_SyncErrors property.
     */
    public set publisher_SyncErrors(value: Syncerror[] | undefined) {
        this._publisher_SyncErrors = value;
    };
    /**
     * Gets the publisherid property value. 
     * @returns a string
     */
    public get publisherid() {
        return this._publisherid;
    };
    /**
     * Sets the publisherid property value. 
     * @param value Value to set for the publisherid property.
     */
    public set publisherid(value: string | undefined) {
        this._publisherid = value;
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
        writer.writeStringValue("address1_addressid", this.address1_addressid);
        writer.writeNumberValue("address1_addresstypecode", this.address1_addresstypecode);
        writer.writeStringValue("address1_city", this.address1_city);
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("customizationoptionvalueprefix", this.customizationoptionvalueprefix);
        writer.writeStringValue("customizationprefix", this.customizationprefix);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeStringValue("friendlyname", this.friendlyname);
        writer.writeBooleanValue("isreadonly", this.isreadonly);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("pinpointpublisherdefaultlocale", this.pinpointpublisherdefaultlocale);
        writer.writeNumberValue("pinpointpublisherid", this.pinpointpublisherid);
        writer.writeCollectionOfObjectValues<Appmodule>("publisher_appmodule", this.publisher_appmodule);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("publisher_DuplicateBaseRecord", this.publisher_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("publisher_DuplicateMatchingRecord", this.publisher_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Publisheraddress>("publisher_PublisherAddress", this.publisher_PublisherAddress);
        writer.writeCollectionOfObjectValues<Solution>("publisher_solution", this.publisher_solution);
        writer.writeCollectionOfObjectValues<Syncerror>("publisher_SyncErrors", this.publisher_SyncErrors);
        writer.writeStringValue("publisherid", this.publisherid);
        writer.writeStringValue("supportingwebsiteurl", this.supportingwebsiteurl);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the supportingwebsiteurl property value. 
     * @returns a string
     */
    public get supportingwebsiteurl() {
        return this._supportingwebsiteurl;
    };
    /**
     * Sets the supportingwebsiteurl property value. 
     * @param value Value to set for the supportingwebsiteurl property.
     */
    public set supportingwebsiteurl(value: string | undefined) {
        this._supportingwebsiteurl = value;
    };
    /**
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
}
