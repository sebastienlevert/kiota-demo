import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_purchaseorderFromDiscriminatorValue} from './createMsdyn_purchaseorderFromDiscriminatorValue';
import {createMsdyn_rmaFromDiscriminatorValue} from './createMsdyn_rmaFromDiscriminatorValue';
import {createMsdyn_rmareceiptproductFromDiscriminatorValue} from './createMsdyn_rmareceiptproductFromDiscriminatorValue';
import {createMsdyn_rtvproductFromDiscriminatorValue} from './createMsdyn_rtvproductFromDiscriminatorValue';
import {createMsdyn_rtvsubstatusFromDiscriminatorValue} from './createMsdyn_rtvsubstatusFromDiscriminatorValue';
import {createMsdyn_shipviaFromDiscriminatorValue} from './createMsdyn_shipviaFromDiscriminatorValue';
import {createMsdyn_taxcodeFromDiscriminatorValue} from './createMsdyn_taxcodeFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Connection, Contact, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_purchaseorder, Msdyn_rma, Msdyn_rmareceiptproduct, Msdyn_rtvproduct, Msdyn_rtvsubstatus, Msdyn_shipvia, Msdyn_taxcode, Msdyn_workorder, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_rtv extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_approveddeclinedby_value?: string | undefined;
    private __msdyn_booking_value?: string | undefined;
    private __msdyn_originalpurchaseorder_value?: string | undefined;
    private __msdyn_originatingrma_value?: string | undefined;
    private __msdyn_returnedby_value?: string | undefined;
    private __msdyn_shipvia_value?: string | undefined;
    private __msdyn_substatus_value?: string | undefined;
    private __msdyn_taxcode_value?: string | undefined;
    private __msdyn_vendor_value?: string | undefined;
    private __msdyn_vendorcontact_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_address1?: string | undefined;
    private _msdyn_address2?: string | undefined;
    private _msdyn_address3?: string | undefined;
    private _msdyn_approveddeclinedby?: Systemuser | undefined;
    private _msdyn_autonumbering?: string | undefined;
    private _msdyn_booking?: Bookableresourcebooking | undefined;
    private _msdyn_city?: string | undefined;
    private _msdyn_country?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV?: Msdyn_rmareceiptproduct[] | undefined;
    private _msdyn_msdyn_rtv_msdyn_rtvproduct_RTV?: Msdyn_rtvproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_originalpurchaseorder?: Msdyn_purchaseorder | undefined;
    private _msdyn_originatingrma?: Msdyn_rma | undefined;
    private _msdyn_postalcode?: string | undefined;
    private _msdyn_referenceno?: string | undefined;
    private _msdyn_requestdate?: Date | undefined;
    private _msdyn_returndate?: Date | undefined;
    private _msdyn_returnedby?: Systemuser | undefined;
    private _msdyn_rtv_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_rtv_Annotations?: Annotation[] | undefined;
    private _msdyn_rtv_Appointments?: Appointment[] | undefined;
    private _msdyn_rtv_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_rtv_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_rtv_connections1?: Connection[] | undefined;
    private _msdyn_rtv_connections2?: Connection[] | undefined;
    private _msdyn_rtv_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rtv_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rtv_Emails?: Email[] | undefined;
    private _msdyn_rtv_Faxes?: Fax[] | undefined;
    private _msdyn_rtv_Letters?: Letter[] | undefined;
    private _msdyn_rtv_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_rtv_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_rtv_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_rtv_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_rtv_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_rtv_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_rtv_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_rtv_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_rtv_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_rtv_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_rtv_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_rtv_ProcessSession?: Processsession[] | undefined;
    private _msdyn_rtv_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_rtv_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_rtv_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_rtv_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_rtv_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_rtv_Tasks?: Task[] | undefined;
    private _msdyn_rtvid?: string | undefined;
    private _msdyn_shipvia?: Msdyn_shipvia | undefined;
    private _msdyn_stateorprovince?: string | undefined;
    private _msdyn_substatus?: Msdyn_rtvsubstatus | undefined;
    private _msdyn_systemstatus?: number | undefined;
    private _msdyn_taxcode?: Msdyn_taxcode | undefined;
    private _msdyn_totalamount?: number | undefined;
    private _msdyn_totalamount_base?: number | undefined;
    private _msdyn_vendor?: Account | undefined;
    private _msdyn_vendorcontact?: Contact | undefined;
    private _msdyn_vendorrma?: string | undefined;
    private _msdyn_workorder?: Msdyn_workorder | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_approveddeclinedby_value property value. 
     * @returns a string
     */
    public get _msdyn_approveddeclinedby_value() {
        return this.__msdyn_approveddeclinedby_value;
    };
    /**
     * Sets the _msdyn_approveddeclinedby_value property value. 
     * @param value Value to set for the _msdyn_approveddeclinedby_value property.
     */
    public set _msdyn_approveddeclinedby_value(value: string | undefined) {
        this.__msdyn_approveddeclinedby_value = value;
    };
    /**
     * Gets the _msdyn_booking_value property value. 
     * @returns a string
     */
    public get _msdyn_booking_value() {
        return this.__msdyn_booking_value;
    };
    /**
     * Sets the _msdyn_booking_value property value. 
     * @param value Value to set for the _msdyn_booking_value property.
     */
    public set _msdyn_booking_value(value: string | undefined) {
        this.__msdyn_booking_value = value;
    };
    /**
     * Gets the _msdyn_originalpurchaseorder_value property value. 
     * @returns a string
     */
    public get _msdyn_originalpurchaseorder_value() {
        return this.__msdyn_originalpurchaseorder_value;
    };
    /**
     * Sets the _msdyn_originalpurchaseorder_value property value. 
     * @param value Value to set for the _msdyn_originalpurchaseorder_value property.
     */
    public set _msdyn_originalpurchaseorder_value(value: string | undefined) {
        this.__msdyn_originalpurchaseorder_value = value;
    };
    /**
     * Gets the _msdyn_originatingrma_value property value. 
     * @returns a string
     */
    public get _msdyn_originatingrma_value() {
        return this.__msdyn_originatingrma_value;
    };
    /**
     * Sets the _msdyn_originatingrma_value property value. 
     * @param value Value to set for the _msdyn_originatingrma_value property.
     */
    public set _msdyn_originatingrma_value(value: string | undefined) {
        this.__msdyn_originatingrma_value = value;
    };
    /**
     * Gets the _msdyn_returnedby_value property value. 
     * @returns a string
     */
    public get _msdyn_returnedby_value() {
        return this.__msdyn_returnedby_value;
    };
    /**
     * Sets the _msdyn_returnedby_value property value. 
     * @param value Value to set for the _msdyn_returnedby_value property.
     */
    public set _msdyn_returnedby_value(value: string | undefined) {
        this.__msdyn_returnedby_value = value;
    };
    /**
     * Gets the _msdyn_shipvia_value property value. 
     * @returns a string
     */
    public get _msdyn_shipvia_value() {
        return this.__msdyn_shipvia_value;
    };
    /**
     * Sets the _msdyn_shipvia_value property value. 
     * @param value Value to set for the _msdyn_shipvia_value property.
     */
    public set _msdyn_shipvia_value(value: string | undefined) {
        this.__msdyn_shipvia_value = value;
    };
    /**
     * Gets the _msdyn_substatus_value property value. 
     * @returns a string
     */
    public get _msdyn_substatus_value() {
        return this.__msdyn_substatus_value;
    };
    /**
     * Sets the _msdyn_substatus_value property value. 
     * @param value Value to set for the _msdyn_substatus_value property.
     */
    public set _msdyn_substatus_value(value: string | undefined) {
        this.__msdyn_substatus_value = value;
    };
    /**
     * Gets the _msdyn_taxcode_value property value. 
     * @returns a string
     */
    public get _msdyn_taxcode_value() {
        return this.__msdyn_taxcode_value;
    };
    /**
     * Sets the _msdyn_taxcode_value property value. 
     * @param value Value to set for the _msdyn_taxcode_value property.
     */
    public set _msdyn_taxcode_value(value: string | undefined) {
        this.__msdyn_taxcode_value = value;
    };
    /**
     * Gets the _msdyn_vendor_value property value. 
     * @returns a string
     */
    public get _msdyn_vendor_value() {
        return this.__msdyn_vendor_value;
    };
    /**
     * Sets the _msdyn_vendor_value property value. 
     * @param value Value to set for the _msdyn_vendor_value property.
     */
    public set _msdyn_vendor_value(value: string | undefined) {
        this.__msdyn_vendor_value = value;
    };
    /**
     * Gets the _msdyn_vendorcontact_value property value. 
     * @returns a string
     */
    public get _msdyn_vendorcontact_value() {
        return this.__msdyn_vendorcontact_value;
    };
    /**
     * Sets the _msdyn_vendorcontact_value property value. 
     * @param value Value to set for the _msdyn_vendorcontact_value property.
     */
    public set _msdyn_vendorcontact_value(value: string | undefined) {
        this.__msdyn_vendorcontact_value = value;
    };
    /**
     * Gets the _msdyn_workorder_value property value. 
     * @returns a string
     */
    public get _msdyn_workorder_value() {
        return this.__msdyn_workorder_value;
    };
    /**
     * Sets the _msdyn_workorder_value property value. 
     * @param value Value to set for the _msdyn_workorder_value property.
     */
    public set _msdyn_workorder_value(value: string | undefined) {
        this.__msdyn_workorder_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
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
     * Instantiates a new msdyn_rtv and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_rtv)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rtv)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_rtv)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rtv)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_approveddeclinedby_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_approveddeclinedby_value = n.getStringValue(); },
            "_msdyn_booking_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_booking_value = n.getStringValue(); },
            "_msdyn_originalpurchaseorder_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_originalpurchaseorder_value = n.getStringValue(); },
            "_msdyn_originatingrma_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_originatingrma_value = n.getStringValue(); },
            "_msdyn_returnedby_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_returnedby_value = n.getStringValue(); },
            "_msdyn_shipvia_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_shipvia_value = n.getStringValue(); },
            "_msdyn_substatus_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_substatus_value = n.getStringValue(); },
            "_msdyn_taxcode_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_taxcode_value = n.getStringValue(); },
            "_msdyn_vendor_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_vendor_value = n.getStringValue(); },
            "_msdyn_vendorcontact_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_vendorcontact_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_rtv)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_rtv)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_rtv)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_rtv)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_rtv)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_rtv)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_rtv).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_rtv).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_rtv).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_rtv).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_rtv).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_rtv).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_rtv).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_rtv).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_address1": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_address1 = n.getStringValue(); },
            "msdyn_address2": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_address2 = n.getStringValue(); },
            "msdyn_address3": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_address3 = n.getStringValue(); },
            "msdyn_approveddeclinedby": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_approveddeclinedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autonumbering": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_autonumbering = n.getStringValue(); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_booking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_city": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_city = n.getStringValue(); },
            "msdyn_country": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_country = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_longitude = n.getNumberValue(); },
            "msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV = n.getCollectionOfObjectValues<Msdyn_rmareceiptproduct>(createMsdyn_rmareceiptproductFromDiscriminatorValue); },
            "msdyn_msdyn_rtv_msdyn_rtvproduct_RTV": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_msdyn_rtv_msdyn_rtvproduct_RTV = n.getCollectionOfObjectValues<Msdyn_rtvproduct>(createMsdyn_rtvproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_name = n.getStringValue(); },
            "msdyn_originalpurchaseorder": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_originalpurchaseorder = n.getObjectValue<Msdyn_purchaseorder>(createMsdyn_purchaseorderFromDiscriminatorValue); },
            "msdyn_originatingrma": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_originatingrma = n.getObjectValue<Msdyn_rma>(createMsdyn_rmaFromDiscriminatorValue); },
            "msdyn_postalcode": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_postalcode = n.getStringValue(); },
            "msdyn_referenceno": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_referenceno = n.getStringValue(); },
            "msdyn_requestdate": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_requestdate = n.getDateValue(); },
            "msdyn_returndate": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_returndate = n.getDateValue(); },
            "msdyn_returnedby": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_returnedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_rtv_ActivityPointers": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_rtv_Annotations": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_rtv_Appointments": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_rtv_AsyncOperations": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_rtv_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_rtv_connections1": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rtv_connections2": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rtv_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rtv_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rtv_Emails": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_rtv_Faxes": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_rtv_Letters": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_rtv_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_rtv_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_rtv_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_rtv_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_rtv_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_rtv_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_rtv_msfp_alerts": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_rtv_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_rtv_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_rtv_PhoneCalls": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_rtv_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_rtv_ProcessSession": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_rtv_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_rtv_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_rtv_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_rtv_SocialActivities": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_rtv_SyncErrors": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_rtv_Tasks": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtv_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_rtvid": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_rtvid = n.getStringValue(); },
            "msdyn_shipvia": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_shipvia = n.getObjectValue<Msdyn_shipvia>(createMsdyn_shipviaFromDiscriminatorValue); },
            "msdyn_stateorprovince": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_stateorprovince = n.getStringValue(); },
            "msdyn_substatus": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_substatus = n.getObjectValue<Msdyn_rtvsubstatus>(createMsdyn_rtvsubstatusFromDiscriminatorValue); },
            "msdyn_systemstatus": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_systemstatus = n.getNumberValue(); },
            "msdyn_taxcode": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_taxcode = n.getObjectValue<Msdyn_taxcode>(createMsdyn_taxcodeFromDiscriminatorValue); },
            "msdyn_totalamount": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_totalamount = n.getNumberValue(); },
            "msdyn_totalamount_base": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_totalamount_base = n.getNumberValue(); },
            "msdyn_vendor": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_vendor = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_vendorcontact": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_vendorcontact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_vendorrma": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_vendorrma = n.getStringValue(); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_rtv).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_rtv).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_rtv).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_rtv).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_rtv).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_rtv).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_rtv).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_rtv).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_rtv).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_rtv).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_rtv).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_rtv).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_address1 property value. 
     * @returns a string
     */
    public get msdyn_address1() {
        return this._msdyn_address1;
    };
    /**
     * Sets the msdyn_address1 property value. 
     * @param value Value to set for the msdyn_address1 property.
     */
    public set msdyn_address1(value: string | undefined) {
        this._msdyn_address1 = value;
    };
    /**
     * Gets the msdyn_address2 property value. 
     * @returns a string
     */
    public get msdyn_address2() {
        return this._msdyn_address2;
    };
    /**
     * Sets the msdyn_address2 property value. 
     * @param value Value to set for the msdyn_address2 property.
     */
    public set msdyn_address2(value: string | undefined) {
        this._msdyn_address2 = value;
    };
    /**
     * Gets the msdyn_address3 property value. 
     * @returns a string
     */
    public get msdyn_address3() {
        return this._msdyn_address3;
    };
    /**
     * Sets the msdyn_address3 property value. 
     * @param value Value to set for the msdyn_address3 property.
     */
    public set msdyn_address3(value: string | undefined) {
        this._msdyn_address3 = value;
    };
    /**
     * Gets the msdyn_approveddeclinedby property value. 
     * @returns a systemuser
     */
    public get msdyn_approveddeclinedby() {
        return this._msdyn_approveddeclinedby;
    };
    /**
     * Sets the msdyn_approveddeclinedby property value. 
     * @param value Value to set for the msdyn_approveddeclinedby property.
     */
    public set msdyn_approveddeclinedby(value: Systemuser | undefined) {
        this._msdyn_approveddeclinedby = value;
    };
    /**
     * Gets the msdyn_autonumbering property value. 
     * @returns a string
     */
    public get msdyn_autonumbering() {
        return this._msdyn_autonumbering;
    };
    /**
     * Sets the msdyn_autonumbering property value. 
     * @param value Value to set for the msdyn_autonumbering property.
     */
    public set msdyn_autonumbering(value: string | undefined) {
        this._msdyn_autonumbering = value;
    };
    /**
     * Gets the msdyn_booking property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_booking() {
        return this._msdyn_booking;
    };
    /**
     * Sets the msdyn_booking property value. 
     * @param value Value to set for the msdyn_booking property.
     */
    public set msdyn_booking(value: Bookableresourcebooking | undefined) {
        this._msdyn_booking = value;
    };
    /**
     * Gets the msdyn_city property value. 
     * @returns a string
     */
    public get msdyn_city() {
        return this._msdyn_city;
    };
    /**
     * Sets the msdyn_city property value. 
     * @param value Value to set for the msdyn_city property.
     */
    public set msdyn_city(value: string | undefined) {
        this._msdyn_city = value;
    };
    /**
     * Gets the msdyn_country property value. 
     * @returns a string
     */
    public get msdyn_country() {
        return this._msdyn_country;
    };
    /**
     * Sets the msdyn_country property value. 
     * @param value Value to set for the msdyn_country property.
     */
    public set msdyn_country(value: string | undefined) {
        this._msdyn_country = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a double
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: number | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a double
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: number | undefined) {
        this._msdyn_longitude = value;
    };
    /**
     * Gets the msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV property value. 
     * @returns a msdyn_rmareceiptproduct
     */
    public get msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV() {
        return this._msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV;
    };
    /**
     * Sets the msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV property value. 
     * @param value Value to set for the msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV property.
     */
    public set msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV(value: Msdyn_rmareceiptproduct[] | undefined) {
        this._msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV = value;
    };
    /**
     * Gets the msdyn_msdyn_rtv_msdyn_rtvproduct_RTV property value. 
     * @returns a msdyn_rtvproduct
     */
    public get msdyn_msdyn_rtv_msdyn_rtvproduct_RTV() {
        return this._msdyn_msdyn_rtv_msdyn_rtvproduct_RTV;
    };
    /**
     * Sets the msdyn_msdyn_rtv_msdyn_rtvproduct_RTV property value. 
     * @param value Value to set for the msdyn_msdyn_rtv_msdyn_rtvproduct_RTV property.
     */
    public set msdyn_msdyn_rtv_msdyn_rtvproduct_RTV(value: Msdyn_rtvproduct[] | undefined) {
        this._msdyn_msdyn_rtv_msdyn_rtvproduct_RTV = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_originalpurchaseorder property value. 
     * @returns a msdyn_purchaseorder
     */
    public get msdyn_originalpurchaseorder() {
        return this._msdyn_originalpurchaseorder;
    };
    /**
     * Sets the msdyn_originalpurchaseorder property value. 
     * @param value Value to set for the msdyn_originalpurchaseorder property.
     */
    public set msdyn_originalpurchaseorder(value: Msdyn_purchaseorder | undefined) {
        this._msdyn_originalpurchaseorder = value;
    };
    /**
     * Gets the msdyn_originatingrma property value. 
     * @returns a msdyn_rma
     */
    public get msdyn_originatingrma() {
        return this._msdyn_originatingrma;
    };
    /**
     * Sets the msdyn_originatingrma property value. 
     * @param value Value to set for the msdyn_originatingrma property.
     */
    public set msdyn_originatingrma(value: Msdyn_rma | undefined) {
        this._msdyn_originatingrma = value;
    };
    /**
     * Gets the msdyn_postalcode property value. 
     * @returns a string
     */
    public get msdyn_postalcode() {
        return this._msdyn_postalcode;
    };
    /**
     * Sets the msdyn_postalcode property value. 
     * @param value Value to set for the msdyn_postalcode property.
     */
    public set msdyn_postalcode(value: string | undefined) {
        this._msdyn_postalcode = value;
    };
    /**
     * Gets the msdyn_referenceno property value. 
     * @returns a string
     */
    public get msdyn_referenceno() {
        return this._msdyn_referenceno;
    };
    /**
     * Sets the msdyn_referenceno property value. 
     * @param value Value to set for the msdyn_referenceno property.
     */
    public set msdyn_referenceno(value: string | undefined) {
        this._msdyn_referenceno = value;
    };
    /**
     * Gets the msdyn_requestdate property value. 
     * @returns a Date
     */
    public get msdyn_requestdate() {
        return this._msdyn_requestdate;
    };
    /**
     * Sets the msdyn_requestdate property value. 
     * @param value Value to set for the msdyn_requestdate property.
     */
    public set msdyn_requestdate(value: Date | undefined) {
        this._msdyn_requestdate = value;
    };
    /**
     * Gets the msdyn_returndate property value. 
     * @returns a Date
     */
    public get msdyn_returndate() {
        return this._msdyn_returndate;
    };
    /**
     * Sets the msdyn_returndate property value. 
     * @param value Value to set for the msdyn_returndate property.
     */
    public set msdyn_returndate(value: Date | undefined) {
        this._msdyn_returndate = value;
    };
    /**
     * Gets the msdyn_returnedby property value. 
     * @returns a systemuser
     */
    public get msdyn_returnedby() {
        return this._msdyn_returnedby;
    };
    /**
     * Sets the msdyn_returnedby property value. 
     * @param value Value to set for the msdyn_returnedby property.
     */
    public set msdyn_returnedby(value: Systemuser | undefined) {
        this._msdyn_returnedby = value;
    };
    /**
     * Gets the msdyn_rtv_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_rtv_ActivityPointers() {
        return this._msdyn_rtv_ActivityPointers;
    };
    /**
     * Sets the msdyn_rtv_ActivityPointers property value. 
     * @param value Value to set for the msdyn_rtv_ActivityPointers property.
     */
    public set msdyn_rtv_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_rtv_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_rtv_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_rtv_Annotations() {
        return this._msdyn_rtv_Annotations;
    };
    /**
     * Sets the msdyn_rtv_Annotations property value. 
     * @param value Value to set for the msdyn_rtv_Annotations property.
     */
    public set msdyn_rtv_Annotations(value: Annotation[] | undefined) {
        this._msdyn_rtv_Annotations = value;
    };
    /**
     * Gets the msdyn_rtv_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_rtv_Appointments() {
        return this._msdyn_rtv_Appointments;
    };
    /**
     * Sets the msdyn_rtv_Appointments property value. 
     * @param value Value to set for the msdyn_rtv_Appointments property.
     */
    public set msdyn_rtv_Appointments(value: Appointment[] | undefined) {
        this._msdyn_rtv_Appointments = value;
    };
    /**
     * Gets the msdyn_rtv_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_rtv_AsyncOperations() {
        return this._msdyn_rtv_AsyncOperations;
    };
    /**
     * Sets the msdyn_rtv_AsyncOperations property value. 
     * @param value Value to set for the msdyn_rtv_AsyncOperations property.
     */
    public set msdyn_rtv_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_rtv_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_rtv_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_rtv_BulkDeleteFailures() {
        return this._msdyn_rtv_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_rtv_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_rtv_BulkDeleteFailures property.
     */
    public set msdyn_rtv_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_rtv_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_rtv_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_rtv_connections1() {
        return this._msdyn_rtv_connections1;
    };
    /**
     * Sets the msdyn_rtv_connections1 property value. 
     * @param value Value to set for the msdyn_rtv_connections1 property.
     */
    public set msdyn_rtv_connections1(value: Connection[] | undefined) {
        this._msdyn_rtv_connections1 = value;
    };
    /**
     * Gets the msdyn_rtv_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_rtv_connections2() {
        return this._msdyn_rtv_connections2;
    };
    /**
     * Sets the msdyn_rtv_connections2 property value. 
     * @param value Value to set for the msdyn_rtv_connections2 property.
     */
    public set msdyn_rtv_connections2(value: Connection[] | undefined) {
        this._msdyn_rtv_connections2 = value;
    };
    /**
     * Gets the msdyn_rtv_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rtv_DuplicateBaseRecord() {
        return this._msdyn_rtv_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_rtv_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_rtv_DuplicateBaseRecord property.
     */
    public set msdyn_rtv_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rtv_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_rtv_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rtv_DuplicateMatchingRecord() {
        return this._msdyn_rtv_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_rtv_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_rtv_DuplicateMatchingRecord property.
     */
    public set msdyn_rtv_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rtv_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_rtv_Emails property value. 
     * @returns a email
     */
    public get msdyn_rtv_Emails() {
        return this._msdyn_rtv_Emails;
    };
    /**
     * Sets the msdyn_rtv_Emails property value. 
     * @param value Value to set for the msdyn_rtv_Emails property.
     */
    public set msdyn_rtv_Emails(value: Email[] | undefined) {
        this._msdyn_rtv_Emails = value;
    };
    /**
     * Gets the msdyn_rtv_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_rtv_Faxes() {
        return this._msdyn_rtv_Faxes;
    };
    /**
     * Sets the msdyn_rtv_Faxes property value. 
     * @param value Value to set for the msdyn_rtv_Faxes property.
     */
    public set msdyn_rtv_Faxes(value: Fax[] | undefined) {
        this._msdyn_rtv_Faxes = value;
    };
    /**
     * Gets the msdyn_rtv_Letters property value. 
     * @returns a letter
     */
    public get msdyn_rtv_Letters() {
        return this._msdyn_rtv_Letters;
    };
    /**
     * Sets the msdyn_rtv_Letters property value. 
     * @param value Value to set for the msdyn_rtv_Letters property.
     */
    public set msdyn_rtv_Letters(value: Letter[] | undefined) {
        this._msdyn_rtv_Letters = value;
    };
    /**
     * Gets the msdyn_rtv_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_rtv_MailboxTrackingFolders() {
        return this._msdyn_rtv_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_rtv_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_rtv_MailboxTrackingFolders property.
     */
    public set msdyn_rtv_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_rtv_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_rtv_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_rtv_msdyn_approvals() {
        return this._msdyn_rtv_msdyn_approvals;
    };
    /**
     * Sets the msdyn_rtv_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_rtv_msdyn_approvals property.
     */
    public set msdyn_rtv_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_rtv_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_rtv_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_rtv_msdyn_bookingalerts() {
        return this._msdyn_rtv_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_rtv_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_rtv_msdyn_bookingalerts property.
     */
    public set msdyn_rtv_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_rtv_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_rtv_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_rtv_msdyn_ocliveworkitems() {
        return this._msdyn_rtv_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_rtv_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_rtv_msdyn_ocliveworkitems property.
     */
    public set msdyn_rtv_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_rtv_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_rtv_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_rtv_msdyn_ocoutboundmessages() {
        return this._msdyn_rtv_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_rtv_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_rtv_msdyn_ocoutboundmessages property.
     */
    public set msdyn_rtv_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_rtv_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_rtv_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_rtv_msdyn_ocsessions() {
        return this._msdyn_rtv_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_rtv_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_rtv_msdyn_ocsessions property.
     */
    public set msdyn_rtv_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_rtv_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_rtv_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_rtv_msfp_alerts() {
        return this._msdyn_rtv_msfp_alerts;
    };
    /**
     * Sets the msdyn_rtv_msfp_alerts property value. 
     * @param value Value to set for the msdyn_rtv_msfp_alerts property.
     */
    public set msdyn_rtv_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_rtv_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_rtv_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_rtv_msfp_surveyinvites() {
        return this._msdyn_rtv_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_rtv_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_rtv_msfp_surveyinvites property.
     */
    public set msdyn_rtv_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_rtv_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_rtv_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_rtv_msfp_surveyresponses() {
        return this._msdyn_rtv_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_rtv_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_rtv_msfp_surveyresponses property.
     */
    public set msdyn_rtv_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_rtv_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_rtv_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_rtv_PhoneCalls() {
        return this._msdyn_rtv_PhoneCalls;
    };
    /**
     * Sets the msdyn_rtv_PhoneCalls property value. 
     * @param value Value to set for the msdyn_rtv_PhoneCalls property.
     */
    public set msdyn_rtv_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_rtv_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_rtv_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_rtv_PrincipalObjectAttributeAccesses() {
        return this._msdyn_rtv_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_rtv_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_rtv_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_rtv_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_rtv_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_rtv_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_rtv_ProcessSession() {
        return this._msdyn_rtv_ProcessSession;
    };
    /**
     * Sets the msdyn_rtv_ProcessSession property value. 
     * @param value Value to set for the msdyn_rtv_ProcessSession property.
     */
    public set msdyn_rtv_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_rtv_ProcessSession = value;
    };
    /**
     * Gets the msdyn_rtv_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_rtv_RecurringAppointmentMasters() {
        return this._msdyn_rtv_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_rtv_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_rtv_RecurringAppointmentMasters property.
     */
    public set msdyn_rtv_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_rtv_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_rtv_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_rtv_ServiceAppointments() {
        return this._msdyn_rtv_ServiceAppointments;
    };
    /**
     * Sets the msdyn_rtv_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_rtv_ServiceAppointments property.
     */
    public set msdyn_rtv_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_rtv_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_rtv_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_rtv_SharePointDocumentLocations() {
        return this._msdyn_rtv_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_rtv_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_rtv_SharePointDocumentLocations property.
     */
    public set msdyn_rtv_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_rtv_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_rtv_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_rtv_SocialActivities() {
        return this._msdyn_rtv_SocialActivities;
    };
    /**
     * Sets the msdyn_rtv_SocialActivities property value. 
     * @param value Value to set for the msdyn_rtv_SocialActivities property.
     */
    public set msdyn_rtv_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_rtv_SocialActivities = value;
    };
    /**
     * Gets the msdyn_rtv_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_rtv_SyncErrors() {
        return this._msdyn_rtv_SyncErrors;
    };
    /**
     * Sets the msdyn_rtv_SyncErrors property value. 
     * @param value Value to set for the msdyn_rtv_SyncErrors property.
     */
    public set msdyn_rtv_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_rtv_SyncErrors = value;
    };
    /**
     * Gets the msdyn_rtv_Tasks property value. 
     * @returns a task
     */
    public get msdyn_rtv_Tasks() {
        return this._msdyn_rtv_Tasks;
    };
    /**
     * Sets the msdyn_rtv_Tasks property value. 
     * @param value Value to set for the msdyn_rtv_Tasks property.
     */
    public set msdyn_rtv_Tasks(value: Task[] | undefined) {
        this._msdyn_rtv_Tasks = value;
    };
    /**
     * Gets the msdyn_rtvid property value. 
     * @returns a string
     */
    public get msdyn_rtvid() {
        return this._msdyn_rtvid;
    };
    /**
     * Sets the msdyn_rtvid property value. 
     * @param value Value to set for the msdyn_rtvid property.
     */
    public set msdyn_rtvid(value: string | undefined) {
        this._msdyn_rtvid = value;
    };
    /**
     * Gets the msdyn_shipvia property value. 
     * @returns a msdyn_shipvia
     */
    public get msdyn_shipvia() {
        return this._msdyn_shipvia;
    };
    /**
     * Sets the msdyn_shipvia property value. 
     * @param value Value to set for the msdyn_shipvia property.
     */
    public set msdyn_shipvia(value: Msdyn_shipvia | undefined) {
        this._msdyn_shipvia = value;
    };
    /**
     * Gets the msdyn_stateorprovince property value. 
     * @returns a string
     */
    public get msdyn_stateorprovince() {
        return this._msdyn_stateorprovince;
    };
    /**
     * Sets the msdyn_stateorprovince property value. 
     * @param value Value to set for the msdyn_stateorprovince property.
     */
    public set msdyn_stateorprovince(value: string | undefined) {
        this._msdyn_stateorprovince = value;
    };
    /**
     * Gets the msdyn_substatus property value. 
     * @returns a msdyn_rtvsubstatus
     */
    public get msdyn_substatus() {
        return this._msdyn_substatus;
    };
    /**
     * Sets the msdyn_substatus property value. 
     * @param value Value to set for the msdyn_substatus property.
     */
    public set msdyn_substatus(value: Msdyn_rtvsubstatus | undefined) {
        this._msdyn_substatus = value;
    };
    /**
     * Gets the msdyn_systemstatus property value. 
     * @returns a integer
     */
    public get msdyn_systemstatus() {
        return this._msdyn_systemstatus;
    };
    /**
     * Sets the msdyn_systemstatus property value. 
     * @param value Value to set for the msdyn_systemstatus property.
     */
    public set msdyn_systemstatus(value: number | undefined) {
        this._msdyn_systemstatus = value;
    };
    /**
     * Gets the msdyn_taxcode property value. 
     * @returns a msdyn_taxcode
     */
    public get msdyn_taxcode() {
        return this._msdyn_taxcode;
    };
    /**
     * Sets the msdyn_taxcode property value. 
     * @param value Value to set for the msdyn_taxcode property.
     */
    public set msdyn_taxcode(value: Msdyn_taxcode | undefined) {
        this._msdyn_taxcode = value;
    };
    /**
     * Gets the msdyn_totalamount property value. 
     * @returns a int64
     */
    public get msdyn_totalamount() {
        return this._msdyn_totalamount;
    };
    /**
     * Sets the msdyn_totalamount property value. 
     * @param value Value to set for the msdyn_totalamount property.
     */
    public set msdyn_totalamount(value: number | undefined) {
        this._msdyn_totalamount = value;
    };
    /**
     * Gets the msdyn_totalamount_base property value. 
     * @returns a int64
     */
    public get msdyn_totalamount_base() {
        return this._msdyn_totalamount_base;
    };
    /**
     * Sets the msdyn_totalamount_base property value. 
     * @param value Value to set for the msdyn_totalamount_base property.
     */
    public set msdyn_totalamount_base(value: number | undefined) {
        this._msdyn_totalamount_base = value;
    };
    /**
     * Gets the msdyn_vendor property value. 
     * @returns a account
     */
    public get msdyn_vendor() {
        return this._msdyn_vendor;
    };
    /**
     * Sets the msdyn_vendor property value. 
     * @param value Value to set for the msdyn_vendor property.
     */
    public set msdyn_vendor(value: Account | undefined) {
        this._msdyn_vendor = value;
    };
    /**
     * Gets the msdyn_vendorcontact property value. 
     * @returns a contact
     */
    public get msdyn_vendorcontact() {
        return this._msdyn_vendorcontact;
    };
    /**
     * Sets the msdyn_vendorcontact property value. 
     * @param value Value to set for the msdyn_vendorcontact property.
     */
    public set msdyn_vendorcontact(value: Contact | undefined) {
        this._msdyn_vendorcontact = value;
    };
    /**
     * Gets the msdyn_vendorrma property value. 
     * @returns a string
     */
    public get msdyn_vendorrma() {
        return this._msdyn_vendorrma;
    };
    /**
     * Sets the msdyn_vendorrma property value. 
     * @param value Value to set for the msdyn_vendorrma property.
     */
    public set msdyn_vendorrma(value: string | undefined) {
        this._msdyn_vendorrma = value;
    };
    /**
     * Gets the msdyn_workorder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_workorder() {
        return this._msdyn_workorder;
    };
    /**
     * Sets the msdyn_workorder property value. 
     * @param value Value to set for the msdyn_workorder property.
     */
    public set msdyn_workorder(value: Msdyn_workorder | undefined) {
        this._msdyn_workorder = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyn_approveddeclinedby_value", this._msdyn_approveddeclinedby_value);
        writer.writeStringValue("_msdyn_booking_value", this._msdyn_booking_value);
        writer.writeStringValue("_msdyn_originalpurchaseorder_value", this._msdyn_originalpurchaseorder_value);
        writer.writeStringValue("_msdyn_originatingrma_value", this._msdyn_originatingrma_value);
        writer.writeStringValue("_msdyn_returnedby_value", this._msdyn_returnedby_value);
        writer.writeStringValue("_msdyn_shipvia_value", this._msdyn_shipvia_value);
        writer.writeStringValue("_msdyn_substatus_value", this._msdyn_substatus_value);
        writer.writeStringValue("_msdyn_taxcode_value", this._msdyn_taxcode_value);
        writer.writeStringValue("_msdyn_vendor_value", this._msdyn_vendor_value);
        writer.writeStringValue("_msdyn_vendorcontact_value", this._msdyn_vendorcontact_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_address1", this.msdyn_address1);
        writer.writeStringValue("msdyn_address2", this.msdyn_address2);
        writer.writeStringValue("msdyn_address3", this.msdyn_address3);
        writer.writeObjectValue<Systemuser>("msdyn_approveddeclinedby", this.msdyn_approveddeclinedby);
        writer.writeStringValue("msdyn_autonumbering", this.msdyn_autonumbering);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_booking", this.msdyn_booking);
        writer.writeStringValue("msdyn_city", this.msdyn_city);
        writer.writeStringValue("msdyn_country", this.msdyn_country);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeCollectionOfObjectValues<Msdyn_rmareceiptproduct>("msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV", this.msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV);
        writer.writeCollectionOfObjectValues<Msdyn_rtvproduct>("msdyn_msdyn_rtv_msdyn_rtvproduct_RTV", this.msdyn_msdyn_rtv_msdyn_rtvproduct_RTV);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_purchaseorder>("msdyn_originalpurchaseorder", this.msdyn_originalpurchaseorder);
        writer.writeObjectValue<Msdyn_rma>("msdyn_originatingrma", this.msdyn_originatingrma);
        writer.writeStringValue("msdyn_postalcode", this.msdyn_postalcode);
        writer.writeStringValue("msdyn_referenceno", this.msdyn_referenceno);
        writer.writeDateValue("msdyn_requestdate", this.msdyn_requestdate);
        writer.writeDateValue("msdyn_returndate", this.msdyn_returndate);
        writer.writeObjectValue<Systemuser>("msdyn_returnedby", this.msdyn_returnedby);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_rtv_ActivityPointers", this.msdyn_rtv_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_rtv_Annotations", this.msdyn_rtv_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_rtv_Appointments", this.msdyn_rtv_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_rtv_AsyncOperations", this.msdyn_rtv_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_rtv_BulkDeleteFailures", this.msdyn_rtv_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rtv_connections1", this.msdyn_rtv_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rtv_connections2", this.msdyn_rtv_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rtv_DuplicateBaseRecord", this.msdyn_rtv_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rtv_DuplicateMatchingRecord", this.msdyn_rtv_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_rtv_Emails", this.msdyn_rtv_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_rtv_Faxes", this.msdyn_rtv_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_rtv_Letters", this.msdyn_rtv_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_rtv_MailboxTrackingFolders", this.msdyn_rtv_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_rtv_msdyn_approvals", this.msdyn_rtv_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_rtv_msdyn_bookingalerts", this.msdyn_rtv_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_rtv_msdyn_ocliveworkitems", this.msdyn_rtv_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_rtv_msdyn_ocoutboundmessages", this.msdyn_rtv_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_rtv_msdyn_ocsessions", this.msdyn_rtv_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_rtv_msfp_alerts", this.msdyn_rtv_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_rtv_msfp_surveyinvites", this.msdyn_rtv_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_rtv_msfp_surveyresponses", this.msdyn_rtv_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_rtv_PhoneCalls", this.msdyn_rtv_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_rtv_PrincipalObjectAttributeAccesses", this.msdyn_rtv_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_rtv_ProcessSession", this.msdyn_rtv_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_rtv_RecurringAppointmentMasters", this.msdyn_rtv_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_rtv_ServiceAppointments", this.msdyn_rtv_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_rtv_SharePointDocumentLocations", this.msdyn_rtv_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_rtv_SocialActivities", this.msdyn_rtv_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_rtv_SyncErrors", this.msdyn_rtv_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_rtv_Tasks", this.msdyn_rtv_Tasks);
        writer.writeStringValue("msdyn_rtvid", this.msdyn_rtvid);
        writer.writeObjectValue<Msdyn_shipvia>("msdyn_shipvia", this.msdyn_shipvia);
        writer.writeStringValue("msdyn_stateorprovince", this.msdyn_stateorprovince);
        writer.writeObjectValue<Msdyn_rtvsubstatus>("msdyn_substatus", this.msdyn_substatus);
        writer.writeNumberValue("msdyn_systemstatus", this.msdyn_systemstatus);
        writer.writeObjectValue<Msdyn_taxcode>("msdyn_taxcode", this.msdyn_taxcode);
        writer.writeNumberValue("msdyn_totalamount", this.msdyn_totalamount);
        writer.writeNumberValue("msdyn_totalamount_base", this.msdyn_totalamount_base);
        writer.writeObjectValue<Account>("msdyn_vendor", this.msdyn_vendor);
        writer.writeObjectValue<Contact>("msdyn_vendorcontact", this.msdyn_vendorcontact);
        writer.writeStringValue("msdyn_vendorrma", this.msdyn_vendorrma);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorder", this.msdyn_workorder);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
