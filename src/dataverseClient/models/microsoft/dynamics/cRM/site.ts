import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEquipmentFromDiscriminatorValue} from './createEquipmentFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createResourceFromDiscriminatorValue} from './createResourceFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {Activitypointer, Appointment, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Email, Equipment, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Organization, Phonecall, Principalobjectattributeaccess, Processsession, Quoteclose, Recurringappointmentmaster, Resource, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Site extends Crmbaseentity implements Parsable {
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
    private _emailaddress?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid_organization?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _site_ActivityPointers?: Activitypointer[] | undefined;
    private _site_Appointments?: Appointment[] | undefined;
    private _site_AsyncOperations?: Asyncoperation[] | undefined;
    private _site_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _site_Emails?: Email[] | undefined;
    private _site_equipment?: Equipment[] | undefined;
    private _site_Faxes?: Fax[] | undefined;
    private _site_Letters?: Letter[] | undefined;
    private _site_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _site_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _site_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _site_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _site_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _site_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _site_msfp_alerts?: Msfp_alert[] | undefined;
    private _site_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _site_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _site_OpportunityCloses?: Opportunityclose[] | undefined;
    private _site_OrderCloses?: Orderclose[] | undefined;
    private _site_PhoneCalls?: Phonecall[] | undefined;
    private _site_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _site_ProcessSessions?: Processsession[] | undefined;
    private _site_QuoteCloses?: Quoteclose[] | undefined;
    private _site_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _site_resources?: Resource[] | undefined;
    private _site_service_appointments?: Serviceappointment[] | undefined;
    private _site_ServiceAppointments?: Serviceappointment[] | undefined;
    private _site_SocialActivities?: Socialactivity[] | undefined;
    private _site_SyncErrors?: Syncerror[] | undefined;
    private _site_system_users?: Systemuser[] | undefined;
    private _site_Tasks?: Task[] | undefined;
    private _siteid?: string | undefined;
    private _timezonecode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Instantiates a new site and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Site)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Site)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Site)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Site)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Site)._organizationid_value = n.getStringValue(); },
            "address1_addressid": (o, n) => { (o as unknown as Site).address1_addressid = n.getStringValue(); },
            "address1_addresstypecode": (o, n) => { (o as unknown as Site).address1_addresstypecode = n.getNumberValue(); },
            "address1_city": (o, n) => { (o as unknown as Site).address1_city = n.getStringValue(); },
            "address1_country": (o, n) => { (o as unknown as Site).address1_country = n.getStringValue(); },
            "address1_county": (o, n) => { (o as unknown as Site).address1_county = n.getStringValue(); },
            "address1_fax": (o, n) => { (o as unknown as Site).address1_fax = n.getStringValue(); },
            "address1_latitude": (o, n) => { (o as unknown as Site).address1_latitude = n.getNumberValue(); },
            "address1_line1": (o, n) => { (o as unknown as Site).address1_line1 = n.getStringValue(); },
            "address1_line2": (o, n) => { (o as unknown as Site).address1_line2 = n.getStringValue(); },
            "address1_line3": (o, n) => { (o as unknown as Site).address1_line3 = n.getStringValue(); },
            "address1_longitude": (o, n) => { (o as unknown as Site).address1_longitude = n.getNumberValue(); },
            "address1_name": (o, n) => { (o as unknown as Site).address1_name = n.getStringValue(); },
            "address1_postalcode": (o, n) => { (o as unknown as Site).address1_postalcode = n.getStringValue(); },
            "address1_postofficebox": (o, n) => { (o as unknown as Site).address1_postofficebox = n.getStringValue(); },
            "address1_shippingmethodcode": (o, n) => { (o as unknown as Site).address1_shippingmethodcode = n.getNumberValue(); },
            "address1_stateorprovince": (o, n) => { (o as unknown as Site).address1_stateorprovince = n.getStringValue(); },
            "address1_telephone1": (o, n) => { (o as unknown as Site).address1_telephone1 = n.getStringValue(); },
            "address1_telephone2": (o, n) => { (o as unknown as Site).address1_telephone2 = n.getStringValue(); },
            "address1_telephone3": (o, n) => { (o as unknown as Site).address1_telephone3 = n.getStringValue(); },
            "address1_upszone": (o, n) => { (o as unknown as Site).address1_upszone = n.getStringValue(); },
            "address1_utcoffset": (o, n) => { (o as unknown as Site).address1_utcoffset = n.getNumberValue(); },
            "address2_addressid": (o, n) => { (o as unknown as Site).address2_addressid = n.getStringValue(); },
            "address2_addresstypecode": (o, n) => { (o as unknown as Site).address2_addresstypecode = n.getNumberValue(); },
            "address2_city": (o, n) => { (o as unknown as Site).address2_city = n.getStringValue(); },
            "address2_country": (o, n) => { (o as unknown as Site).address2_country = n.getStringValue(); },
            "address2_county": (o, n) => { (o as unknown as Site).address2_county = n.getStringValue(); },
            "address2_fax": (o, n) => { (o as unknown as Site).address2_fax = n.getStringValue(); },
            "address2_latitude": (o, n) => { (o as unknown as Site).address2_latitude = n.getNumberValue(); },
            "address2_line1": (o, n) => { (o as unknown as Site).address2_line1 = n.getStringValue(); },
            "address2_line2": (o, n) => { (o as unknown as Site).address2_line2 = n.getStringValue(); },
            "address2_line3": (o, n) => { (o as unknown as Site).address2_line3 = n.getStringValue(); },
            "address2_longitude": (o, n) => { (o as unknown as Site).address2_longitude = n.getNumberValue(); },
            "address2_name": (o, n) => { (o as unknown as Site).address2_name = n.getStringValue(); },
            "address2_postalcode": (o, n) => { (o as unknown as Site).address2_postalcode = n.getStringValue(); },
            "address2_postofficebox": (o, n) => { (o as unknown as Site).address2_postofficebox = n.getStringValue(); },
            "address2_shippingmethodcode": (o, n) => { (o as unknown as Site).address2_shippingmethodcode = n.getNumberValue(); },
            "address2_stateorprovince": (o, n) => { (o as unknown as Site).address2_stateorprovince = n.getStringValue(); },
            "address2_telephone1": (o, n) => { (o as unknown as Site).address2_telephone1 = n.getStringValue(); },
            "address2_telephone2": (o, n) => { (o as unknown as Site).address2_telephone2 = n.getStringValue(); },
            "address2_telephone3": (o, n) => { (o as unknown as Site).address2_telephone3 = n.getStringValue(); },
            "address2_upszone": (o, n) => { (o as unknown as Site).address2_upszone = n.getStringValue(); },
            "address2_utcoffset": (o, n) => { (o as unknown as Site).address2_utcoffset = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Site).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Site).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Site).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "emailaddress": (o, n) => { (o as unknown as Site).emailaddress = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Site).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Site).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Site).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Site).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Site).name = n.getStringValue(); },
            "organizationid_organization": (o, n) => { (o as unknown as Site).organizationid_organization = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Site).overriddencreatedon = n.getDateValue(); },
            "site_ActivityPointers": (o, n) => { (o as unknown as Site).site_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "site_Appointments": (o, n) => { (o as unknown as Site).site_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "site_AsyncOperations": (o, n) => { (o as unknown as Site).site_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "site_BulkDeleteFailures": (o, n) => { (o as unknown as Site).site_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "site_Emails": (o, n) => { (o as unknown as Site).site_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "site_equipment": (o, n) => { (o as unknown as Site).site_equipment = n.getCollectionOfObjectValues<Equipment>(createEquipmentFromDiscriminatorValue); },
            "site_Faxes": (o, n) => { (o as unknown as Site).site_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "site_Letters": (o, n) => { (o as unknown as Site).site_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "site_MailboxTrackingFolders": (o, n) => { (o as unknown as Site).site_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "site_msdyn_approvals": (o, n) => { (o as unknown as Site).site_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "site_msdyn_bookingalerts": (o, n) => { (o as unknown as Site).site_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "site_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Site).site_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "site_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Site).site_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "site_msdyn_ocsessions": (o, n) => { (o as unknown as Site).site_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "site_msfp_alerts": (o, n) => { (o as unknown as Site).site_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "site_msfp_surveyinvites": (o, n) => { (o as unknown as Site).site_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "site_msfp_surveyresponses": (o, n) => { (o as unknown as Site).site_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "site_OpportunityCloses": (o, n) => { (o as unknown as Site).site_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "site_OrderCloses": (o, n) => { (o as unknown as Site).site_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "site_PhoneCalls": (o, n) => { (o as unknown as Site).site_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "site_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Site).site_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "site_ProcessSessions": (o, n) => { (o as unknown as Site).site_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "site_QuoteCloses": (o, n) => { (o as unknown as Site).site_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "site_RecurringAppointmentMasters": (o, n) => { (o as unknown as Site).site_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "site_resources": (o, n) => { (o as unknown as Site).site_resources = n.getCollectionOfObjectValues<Resource>(createResourceFromDiscriminatorValue); },
            "site_service_appointments": (o, n) => { (o as unknown as Site).site_service_appointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "site_ServiceAppointments": (o, n) => { (o as unknown as Site).site_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "site_SocialActivities": (o, n) => { (o as unknown as Site).site_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "site_SyncErrors": (o, n) => { (o as unknown as Site).site_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "site_system_users": (o, n) => { (o as unknown as Site).site_system_users = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "site_Tasks": (o, n) => { (o as unknown as Site).site_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "siteid": (o, n) => { (o as unknown as Site).siteid = n.getStringValue(); },
            "timezonecode": (o, n) => { (o as unknown as Site).timezonecode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Site).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Site).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Site).versionnumber = n.getNumberValue(); },
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
     * Gets the organizationid_organization property value. 
     * @returns a organization
     */
    public get organizationid_organization() {
        return this._organizationid_organization;
    };
    /**
     * Sets the organizationid_organization property value. 
     * @param value Value to set for the organizationid_organization property.
     */
    public set organizationid_organization(value: Organization | undefined) {
        this._organizationid_organization = value;
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
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid_organization", this.organizationid_organization);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeCollectionOfObjectValues<Activitypointer>("site_ActivityPointers", this.site_ActivityPointers);
        writer.writeCollectionOfObjectValues<Appointment>("site_Appointments", this.site_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("site_AsyncOperations", this.site_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("site_BulkDeleteFailures", this.site_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Email>("site_Emails", this.site_Emails);
        writer.writeCollectionOfObjectValues<Equipment>("site_equipment", this.site_equipment);
        writer.writeCollectionOfObjectValues<Fax>("site_Faxes", this.site_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("site_Letters", this.site_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("site_MailboxTrackingFolders", this.site_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("site_msdyn_approvals", this.site_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("site_msdyn_bookingalerts", this.site_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("site_msdyn_ocliveworkitems", this.site_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("site_msdyn_ocoutboundmessages", this.site_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("site_msdyn_ocsessions", this.site_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("site_msfp_alerts", this.site_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("site_msfp_surveyinvites", this.site_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("site_msfp_surveyresponses", this.site_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("site_OpportunityCloses", this.site_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("site_OrderCloses", this.site_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("site_PhoneCalls", this.site_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("site_PrincipalObjectAttributeAccesses", this.site_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("site_ProcessSessions", this.site_ProcessSessions);
        writer.writeCollectionOfObjectValues<Quoteclose>("site_QuoteCloses", this.site_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("site_RecurringAppointmentMasters", this.site_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Resource>("site_resources", this.site_resources);
        writer.writeCollectionOfObjectValues<Serviceappointment>("site_service_appointments", this.site_service_appointments);
        writer.writeCollectionOfObjectValues<Serviceappointment>("site_ServiceAppointments", this.site_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("site_SocialActivities", this.site_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("site_SyncErrors", this.site_SyncErrors);
        writer.writeCollectionOfObjectValues<Systemuser>("site_system_users", this.site_system_users);
        writer.writeCollectionOfObjectValues<Task>("site_Tasks", this.site_Tasks);
        writer.writeStringValue("siteid", this.siteid);
        writer.writeNumberValue("timezonecode", this.timezonecode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the site_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get site_ActivityPointers() {
        return this._site_ActivityPointers;
    };
    /**
     * Sets the site_ActivityPointers property value. 
     * @param value Value to set for the site_ActivityPointers property.
     */
    public set site_ActivityPointers(value: Activitypointer[] | undefined) {
        this._site_ActivityPointers = value;
    };
    /**
     * Gets the site_Appointments property value. 
     * @returns a appointment
     */
    public get site_Appointments() {
        return this._site_Appointments;
    };
    /**
     * Sets the site_Appointments property value. 
     * @param value Value to set for the site_Appointments property.
     */
    public set site_Appointments(value: Appointment[] | undefined) {
        this._site_Appointments = value;
    };
    /**
     * Gets the site_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get site_AsyncOperations() {
        return this._site_AsyncOperations;
    };
    /**
     * Sets the site_AsyncOperations property value. 
     * @param value Value to set for the Site_AsyncOperations property.
     */
    public set site_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._site_AsyncOperations = value;
    };
    /**
     * Gets the site_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get site_BulkDeleteFailures() {
        return this._site_BulkDeleteFailures;
    };
    /**
     * Sets the site_BulkDeleteFailures property value. 
     * @param value Value to set for the Site_BulkDeleteFailures property.
     */
    public set site_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._site_BulkDeleteFailures = value;
    };
    /**
     * Gets the site_Emails property value. 
     * @returns a email
     */
    public get site_Emails() {
        return this._site_Emails;
    };
    /**
     * Sets the site_Emails property value. 
     * @param value Value to set for the site_Emails property.
     */
    public set site_Emails(value: Email[] | undefined) {
        this._site_Emails = value;
    };
    /**
     * Gets the site_equipment property value. 
     * @returns a equipment
     */
    public get site_equipment() {
        return this._site_equipment;
    };
    /**
     * Sets the site_equipment property value. 
     * @param value Value to set for the site_equipment property.
     */
    public set site_equipment(value: Equipment[] | undefined) {
        this._site_equipment = value;
    };
    /**
     * Gets the site_Faxes property value. 
     * @returns a fax
     */
    public get site_Faxes() {
        return this._site_Faxes;
    };
    /**
     * Sets the site_Faxes property value. 
     * @param value Value to set for the site_Faxes property.
     */
    public set site_Faxes(value: Fax[] | undefined) {
        this._site_Faxes = value;
    };
    /**
     * Gets the site_Letters property value. 
     * @returns a letter
     */
    public get site_Letters() {
        return this._site_Letters;
    };
    /**
     * Sets the site_Letters property value. 
     * @param value Value to set for the site_Letters property.
     */
    public set site_Letters(value: Letter[] | undefined) {
        this._site_Letters = value;
    };
    /**
     * Gets the site_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get site_MailboxTrackingFolders() {
        return this._site_MailboxTrackingFolders;
    };
    /**
     * Sets the site_MailboxTrackingFolders property value. 
     * @param value Value to set for the site_MailboxTrackingFolders property.
     */
    public set site_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._site_MailboxTrackingFolders = value;
    };
    /**
     * Gets the site_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get site_msdyn_approvals() {
        return this._site_msdyn_approvals;
    };
    /**
     * Sets the site_msdyn_approvals property value. 
     * @param value Value to set for the site_msdyn_approvals property.
     */
    public set site_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._site_msdyn_approvals = value;
    };
    /**
     * Gets the site_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get site_msdyn_bookingalerts() {
        return this._site_msdyn_bookingalerts;
    };
    /**
     * Sets the site_msdyn_bookingalerts property value. 
     * @param value Value to set for the site_msdyn_bookingalerts property.
     */
    public set site_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._site_msdyn_bookingalerts = value;
    };
    /**
     * Gets the site_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get site_msdyn_ocliveworkitems() {
        return this._site_msdyn_ocliveworkitems;
    };
    /**
     * Sets the site_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the site_msdyn_ocliveworkitems property.
     */
    public set site_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._site_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the site_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get site_msdyn_ocoutboundmessages() {
        return this._site_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the site_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the site_msdyn_ocoutboundmessages property.
     */
    public set site_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._site_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the site_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get site_msdyn_ocsessions() {
        return this._site_msdyn_ocsessions;
    };
    /**
     * Sets the site_msdyn_ocsessions property value. 
     * @param value Value to set for the site_msdyn_ocsessions property.
     */
    public set site_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._site_msdyn_ocsessions = value;
    };
    /**
     * Gets the site_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get site_msfp_alerts() {
        return this._site_msfp_alerts;
    };
    /**
     * Sets the site_msfp_alerts property value. 
     * @param value Value to set for the site_msfp_alerts property.
     */
    public set site_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._site_msfp_alerts = value;
    };
    /**
     * Gets the site_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get site_msfp_surveyinvites() {
        return this._site_msfp_surveyinvites;
    };
    /**
     * Sets the site_msfp_surveyinvites property value. 
     * @param value Value to set for the site_msfp_surveyinvites property.
     */
    public set site_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._site_msfp_surveyinvites = value;
    };
    /**
     * Gets the site_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get site_msfp_surveyresponses() {
        return this._site_msfp_surveyresponses;
    };
    /**
     * Sets the site_msfp_surveyresponses property value. 
     * @param value Value to set for the site_msfp_surveyresponses property.
     */
    public set site_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._site_msfp_surveyresponses = value;
    };
    /**
     * Gets the site_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get site_OpportunityCloses() {
        return this._site_OpportunityCloses;
    };
    /**
     * Sets the site_OpportunityCloses property value. 
     * @param value Value to set for the site_OpportunityCloses property.
     */
    public set site_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._site_OpportunityCloses = value;
    };
    /**
     * Gets the site_OrderCloses property value. 
     * @returns a orderclose
     */
    public get site_OrderCloses() {
        return this._site_OrderCloses;
    };
    /**
     * Sets the site_OrderCloses property value. 
     * @param value Value to set for the site_OrderCloses property.
     */
    public set site_OrderCloses(value: Orderclose[] | undefined) {
        this._site_OrderCloses = value;
    };
    /**
     * Gets the site_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get site_PhoneCalls() {
        return this._site_PhoneCalls;
    };
    /**
     * Sets the site_PhoneCalls property value. 
     * @param value Value to set for the site_PhoneCalls property.
     */
    public set site_PhoneCalls(value: Phonecall[] | undefined) {
        this._site_PhoneCalls = value;
    };
    /**
     * Gets the site_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get site_PrincipalObjectAttributeAccesses() {
        return this._site_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the site_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the site_PrincipalObjectAttributeAccesses property.
     */
    public set site_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._site_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the site_ProcessSessions property value. 
     * @returns a processsession
     */
    public get site_ProcessSessions() {
        return this._site_ProcessSessions;
    };
    /**
     * Sets the site_ProcessSessions property value. 
     * @param value Value to set for the Site_ProcessSessions property.
     */
    public set site_ProcessSessions(value: Processsession[] | undefined) {
        this._site_ProcessSessions = value;
    };
    /**
     * Gets the site_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get site_QuoteCloses() {
        return this._site_QuoteCloses;
    };
    /**
     * Sets the site_QuoteCloses property value. 
     * @param value Value to set for the site_QuoteCloses property.
     */
    public set site_QuoteCloses(value: Quoteclose[] | undefined) {
        this._site_QuoteCloses = value;
    };
    /**
     * Gets the site_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get site_RecurringAppointmentMasters() {
        return this._site_RecurringAppointmentMasters;
    };
    /**
     * Sets the site_RecurringAppointmentMasters property value. 
     * @param value Value to set for the site_RecurringAppointmentMasters property.
     */
    public set site_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._site_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the site_resources property value. 
     * @returns a resource
     */
    public get site_resources() {
        return this._site_resources;
    };
    /**
     * Sets the site_resources property value. 
     * @param value Value to set for the site_resources property.
     */
    public set site_resources(value: Resource[] | undefined) {
        this._site_resources = value;
    };
    /**
     * Gets the site_service_appointments property value. 
     * @returns a serviceappointment
     */
    public get site_service_appointments() {
        return this._site_service_appointments;
    };
    /**
     * Sets the site_service_appointments property value. 
     * @param value Value to set for the site_service_appointments property.
     */
    public set site_service_appointments(value: Serviceappointment[] | undefined) {
        this._site_service_appointments = value;
    };
    /**
     * Gets the site_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get site_ServiceAppointments() {
        return this._site_ServiceAppointments;
    };
    /**
     * Sets the site_ServiceAppointments property value. 
     * @param value Value to set for the site_ServiceAppointments property.
     */
    public set site_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._site_ServiceAppointments = value;
    };
    /**
     * Gets the site_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get site_SocialActivities() {
        return this._site_SocialActivities;
    };
    /**
     * Sets the site_SocialActivities property value. 
     * @param value Value to set for the site_SocialActivities property.
     */
    public set site_SocialActivities(value: Socialactivity[] | undefined) {
        this._site_SocialActivities = value;
    };
    /**
     * Gets the site_SyncErrors property value. 
     * @returns a syncerror
     */
    public get site_SyncErrors() {
        return this._site_SyncErrors;
    };
    /**
     * Sets the site_SyncErrors property value. 
     * @param value Value to set for the Site_SyncErrors property.
     */
    public set site_SyncErrors(value: Syncerror[] | undefined) {
        this._site_SyncErrors = value;
    };
    /**
     * Gets the site_system_users property value. 
     * @returns a systemuser
     */
    public get site_system_users() {
        return this._site_system_users;
    };
    /**
     * Sets the site_system_users property value. 
     * @param value Value to set for the site_system_users property.
     */
    public set site_system_users(value: Systemuser[] | undefined) {
        this._site_system_users = value;
    };
    /**
     * Gets the site_Tasks property value. 
     * @returns a task
     */
    public get site_Tasks() {
        return this._site_Tasks;
    };
    /**
     * Sets the site_Tasks property value. 
     * @param value Value to set for the site_Tasks property.
     */
    public set site_Tasks(value: Task[] | undefined) {
        this._site_Tasks = value;
    };
    /**
     * Gets the siteid property value. 
     * @returns a string
     */
    public get siteid() {
        return this._siteid;
    };
    /**
     * Sets the siteid property value. 
     * @param value Value to set for the siteid property.
     */
    public set siteid(value: string | undefined) {
        this._siteid = value;
    };
    /**
     * Gets the timezonecode property value. 
     * @returns a integer
     */
    public get timezonecode() {
        return this._timezonecode;
    };
    /**
     * Sets the timezonecode property value. 
     * @param value Value to set for the timezonecode property.
     */
    public set timezonecode(value: number | undefined) {
        this._timezonecode = value;
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
}
