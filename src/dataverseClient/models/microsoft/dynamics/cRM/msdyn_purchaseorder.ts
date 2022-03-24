import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue} from './createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_paymenttermFromDiscriminatorValue} from './createMsdyn_paymenttermFromDiscriminatorValue';
import {createMsdyn_purchaseorderbillFromDiscriminatorValue} from './createMsdyn_purchaseorderbillFromDiscriminatorValue';
import {createMsdyn_purchaseorderproductFromDiscriminatorValue} from './createMsdyn_purchaseorderproductFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue';
import {createMsdyn_purchaseordersubstatusFromDiscriminatorValue} from './createMsdyn_purchaseordersubstatusFromDiscriminatorValue';
import {createMsdyn_rtvFromDiscriminatorValue} from './createMsdyn_rtvFromDiscriminatorValue';
import {createMsdyn_shipviaFromDiscriminatorValue} from './createMsdyn_shipviaFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresource, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_paymentterm, Msdyn_purchaseorderbill, Msdyn_purchaseorderproduct, Msdyn_purchaseorderreceipt, Msdyn_purchaseorderreceiptproduct, Msdyn_purchaseordersubstatus, Msdyn_rtv, Msdyn_shipvia, Msdyn_warehouse, Msdyn_workorder, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_purchaseorder extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_approvedrejectedby_value?: string | undefined;
    private __msdyn_booking_value?: string | undefined;
    private __msdyn_orderedby_value?: string | undefined;
    private __msdyn_paymentterm_value?: string | undefined;
    private __msdyn_receivetowarehouse_value?: string | undefined;
    private __msdyn_requestedbyresource_value?: string | undefined;
    private __msdyn_shipvia_value?: string | undefined;
    private __msdyn_substatus_value?: string | undefined;
    private __msdyn_vendor_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799?: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[] | undefined;
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
    private _msdyn_addressname?: string | undefined;
    private _msdyn_amountbilled?: number | undefined;
    private _msdyn_amountbilled_base?: number | undefined;
    private _msdyn_approvalstatus?: number | undefined;
    private _msdyn_approvedrejectedby?: Systemuser | undefined;
    private _msdyn_autonumbering?: string | undefined;
    private _msdyn_booking?: Bookableresourcebooking | undefined;
    private _msdyn_city?: string | undefined;
    private _msdyn_country?: string | undefined;
    private _msdyn_dateexpected?: Date | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder?: Msdyn_purchaseorderbill[] | undefined;
    private _msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder?: Msdyn_purchaseorderproduct[] | undefined;
    private _msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder?: Msdyn_purchaseorderreceipt[] | undefined;
    private _msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder?: Msdyn_purchaseorderreceiptproduct[] | undefined;
    private _msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO?: Msdyn_rtv[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_orderedby?: Systemuser | undefined;
    private _msdyn_paymentterm?: Msdyn_paymentterm | undefined;
    private _msdyn_postalcode?: string | undefined;
    private _msdyn_purchaseorder_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_purchaseorder_Annotations?: Annotation[] | undefined;
    private _msdyn_purchaseorder_Appointments?: Appointment[] | undefined;
    private _msdyn_purchaseorder_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_purchaseorder_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_purchaseorder_connections1?: Connection[] | undefined;
    private _msdyn_purchaseorder_connections2?: Connection[] | undefined;
    private _msdyn_purchaseorder_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_purchaseorder_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_purchaseorder_Emails?: Email[] | undefined;
    private _msdyn_purchaseorder_Faxes?: Fax[] | undefined;
    private _msdyn_purchaseorder_Letters?: Letter[] | undefined;
    private _msdyn_purchaseorder_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_purchaseorder_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_purchaseorder_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_purchaseorder_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_purchaseorder_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_purchaseorder_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_purchaseorder_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_purchaseorder_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_purchaseorder_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_purchaseorder_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_purchaseorder_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_purchaseorder_ProcessSession?: Processsession[] | undefined;
    private _msdyn_purchaseorder_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_purchaseorder_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_purchaseorder_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_purchaseorder_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_purchaseorder_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_purchaseorder_Tasks?: Task[] | undefined;
    private _msdyn_purchaseorderdate?: Date | undefined;
    private _msdyn_purchaseorderid?: string | undefined;
    private _msdyn_receivetowarehouse?: Msdyn_warehouse | undefined;
    private _msdyn_requestedbyresource?: Bookableresource | undefined;
    private _msdyn_shipto?: number | undefined;
    private _msdyn_shipvia?: Msdyn_shipvia | undefined;
    private _msdyn_stateorprovince?: string | undefined;
    private _msdyn_substatus?: Msdyn_purchaseordersubstatus | undefined;
    private _msdyn_systemstatus?: number | undefined;
    private _msdyn_totalamount?: number | undefined;
    private _msdyn_totalamount_base?: number | undefined;
    private _msdyn_vendor?: Account | undefined;
    private _msdyn_vendornote?: string | undefined;
    private _msdyn_workorder?: Msdyn_workorder | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
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
     * Gets the _msdyn_approvedrejectedby_value property value. 
     * @returns a string
     */
    public get _msdyn_approvedrejectedby_value() {
        return this.__msdyn_approvedrejectedby_value;
    };
    /**
     * Sets the _msdyn_approvedrejectedby_value property value. 
     * @param value Value to set for the _msdyn_approvedrejectedby_value property.
     */
    public set _msdyn_approvedrejectedby_value(value: string | undefined) {
        this.__msdyn_approvedrejectedby_value = value;
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
     * Gets the _msdyn_orderedby_value property value. 
     * @returns a string
     */
    public get _msdyn_orderedby_value() {
        return this.__msdyn_orderedby_value;
    };
    /**
     * Sets the _msdyn_orderedby_value property value. 
     * @param value Value to set for the _msdyn_orderedby_value property.
     */
    public set _msdyn_orderedby_value(value: string | undefined) {
        this.__msdyn_orderedby_value = value;
    };
    /**
     * Gets the _msdyn_paymentterm_value property value. 
     * @returns a string
     */
    public get _msdyn_paymentterm_value() {
        return this.__msdyn_paymentterm_value;
    };
    /**
     * Sets the _msdyn_paymentterm_value property value. 
     * @param value Value to set for the _msdyn_paymentterm_value property.
     */
    public set _msdyn_paymentterm_value(value: string | undefined) {
        this.__msdyn_paymentterm_value = value;
    };
    /**
     * Gets the _msdyn_receivetowarehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_receivetowarehouse_value() {
        return this.__msdyn_receivetowarehouse_value;
    };
    /**
     * Sets the _msdyn_receivetowarehouse_value property value. 
     * @param value Value to set for the _msdyn_receivetowarehouse_value property.
     */
    public set _msdyn_receivetowarehouse_value(value: string | undefined) {
        this.__msdyn_receivetowarehouse_value = value;
    };
    /**
     * Gets the _msdyn_requestedbyresource_value property value. 
     * @returns a string
     */
    public get _msdyn_requestedbyresource_value() {
        return this.__msdyn_requestedbyresource_value;
    };
    /**
     * Sets the _msdyn_requestedbyresource_value property value. 
     * @param value Value to set for the _msdyn_requestedbyresource_value property.
     */
    public set _msdyn_requestedbyresource_value(value: string | undefined) {
        this.__msdyn_requestedbyresource_value = value;
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
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
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
     * Gets the bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property value. 
     * @returns a msdyn_bpf_2c5fe86acc8b414b8322ae571000c799
     */
    public get bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799() {
        return this._bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799;
    };
    /**
     * Sets the bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property value. 
     * @param value Value to set for the bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property.
     */
    public set bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799(value: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[] | undefined) {
        this._bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = value;
    };
    /**
     * Instantiates a new msdyn_purchaseorder and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_approvedrejectedby_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_approvedrejectedby_value = n.getStringValue(); },
            "_msdyn_booking_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_booking_value = n.getStringValue(); },
            "_msdyn_orderedby_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_orderedby_value = n.getStringValue(); },
            "_msdyn_paymentterm_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_paymentterm_value = n.getStringValue(); },
            "_msdyn_receivetowarehouse_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_receivetowarehouse_value = n.getStringValue(); },
            "_msdyn_requestedbyresource_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_requestedbyresource_value = n.getStringValue(); },
            "_msdyn_shipvia_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_shipvia_value = n.getStringValue(); },
            "_msdyn_substatus_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_substatus_value = n.getStringValue(); },
            "_msdyn_vendor_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_vendor_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._stageid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_purchaseorder)._transactioncurrencyid_value = n.getStringValue(); },
            "bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799": (o, n) => { (o as unknown as Msdyn_purchaseorder).bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = n.getCollectionOfObjectValues<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>(createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Msdyn_purchaseorder).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_purchaseorder).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_purchaseorder).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_purchaseorder).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_purchaseorder).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_purchaseorder).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_purchaseorder).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_purchaseorder).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_address1": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_address1 = n.getStringValue(); },
            "msdyn_address2": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_address2 = n.getStringValue(); },
            "msdyn_address3": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_address3 = n.getStringValue(); },
            "msdyn_addressname": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_addressname = n.getStringValue(); },
            "msdyn_amountbilled": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_amountbilled = n.getNumberValue(); },
            "msdyn_amountbilled_base": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_amountbilled_base = n.getNumberValue(); },
            "msdyn_approvalstatus": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_approvalstatus = n.getNumberValue(); },
            "msdyn_approvedrejectedby": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_approvedrejectedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autonumbering": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_autonumbering = n.getStringValue(); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_booking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_city": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_city = n.getStringValue(); },
            "msdyn_country": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_country = n.getStringValue(); },
            "msdyn_dateexpected": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_dateexpected = n.getDateValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_internalflags = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_longitude = n.getNumberValue(); },
            "msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder = n.getCollectionOfObjectValues<Msdyn_purchaseorderbill>(createMsdyn_purchaseorderbillFromDiscriminatorValue); },
            "msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder = n.getCollectionOfObjectValues<Msdyn_purchaseorderproduct>(createMsdyn_purchaseorderproductFromDiscriminatorValue); },
            "msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder = n.getCollectionOfObjectValues<Msdyn_purchaseorderreceipt>(createMsdyn_purchaseorderreceiptFromDiscriminatorValue); },
            "msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder = n.getCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>(createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue); },
            "msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO = n.getCollectionOfObjectValues<Msdyn_rtv>(createMsdyn_rtvFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_name = n.getStringValue(); },
            "msdyn_orderedby": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_orderedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_paymentterm": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_paymentterm = n.getObjectValue<Msdyn_paymentterm>(createMsdyn_paymenttermFromDiscriminatorValue); },
            "msdyn_postalcode": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_postalcode = n.getStringValue(); },
            "msdyn_purchaseorder_ActivityPointers": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_purchaseorder_Annotations": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_purchaseorder_Appointments": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_purchaseorder_AsyncOperations": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_purchaseorder_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_purchaseorder_connections1": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_purchaseorder_connections2": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_purchaseorder_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_purchaseorder_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_purchaseorder_Emails": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_purchaseorder_Faxes": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_purchaseorder_Letters": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_purchaseorder_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_purchaseorder_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_purchaseorder_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_purchaseorder_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_purchaseorder_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_purchaseorder_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_purchaseorder_msfp_alerts": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_purchaseorder_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_purchaseorder_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_purchaseorder_PhoneCalls": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_purchaseorder_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_purchaseorder_ProcessSession": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_purchaseorder_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_purchaseorder_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_purchaseorder_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_purchaseorder_SocialActivities": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_purchaseorder_SyncErrors": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_purchaseorder_Tasks": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorder_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_purchaseorderdate": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorderdate = n.getDateValue(); },
            "msdyn_purchaseorderid": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_purchaseorderid = n.getStringValue(); },
            "msdyn_receivetowarehouse": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_receivetowarehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_requestedbyresource": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_requestedbyresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_shipto": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_shipto = n.getNumberValue(); },
            "msdyn_shipvia": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_shipvia = n.getObjectValue<Msdyn_shipvia>(createMsdyn_shipviaFromDiscriminatorValue); },
            "msdyn_stateorprovince": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_stateorprovince = n.getStringValue(); },
            "msdyn_substatus": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_substatus = n.getObjectValue<Msdyn_purchaseordersubstatus>(createMsdyn_purchaseordersubstatusFromDiscriminatorValue); },
            "msdyn_systemstatus": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_systemstatus = n.getNumberValue(); },
            "msdyn_totalamount": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_totalamount = n.getNumberValue(); },
            "msdyn_totalamount_base": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_totalamount_base = n.getNumberValue(); },
            "msdyn_vendor": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_vendor = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_vendornote": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_vendornote = n.getStringValue(); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_purchaseorder).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_purchaseorder).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_purchaseorder).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_purchaseorder).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_purchaseorder).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_purchaseorder).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_purchaseorder).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_purchaseorder).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_purchaseorder).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_purchaseorder).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_purchaseorder).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_purchaseorder).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_purchaseorder).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_purchaseorder).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_purchaseorder).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_addressname property value. 
     * @returns a string
     */
    public get msdyn_addressname() {
        return this._msdyn_addressname;
    };
    /**
     * Sets the msdyn_addressname property value. 
     * @param value Value to set for the msdyn_addressname property.
     */
    public set msdyn_addressname(value: string | undefined) {
        this._msdyn_addressname = value;
    };
    /**
     * Gets the msdyn_amountbilled property value. 
     * @returns a int64
     */
    public get msdyn_amountbilled() {
        return this._msdyn_amountbilled;
    };
    /**
     * Sets the msdyn_amountbilled property value. 
     * @param value Value to set for the msdyn_amountbilled property.
     */
    public set msdyn_amountbilled(value: number | undefined) {
        this._msdyn_amountbilled = value;
    };
    /**
     * Gets the msdyn_amountbilled_base property value. 
     * @returns a int64
     */
    public get msdyn_amountbilled_base() {
        return this._msdyn_amountbilled_base;
    };
    /**
     * Sets the msdyn_amountbilled_base property value. 
     * @param value Value to set for the msdyn_amountbilled_base property.
     */
    public set msdyn_amountbilled_base(value: number | undefined) {
        this._msdyn_amountbilled_base = value;
    };
    /**
     * Gets the msdyn_approvalstatus property value. 
     * @returns a integer
     */
    public get msdyn_approvalstatus() {
        return this._msdyn_approvalstatus;
    };
    /**
     * Sets the msdyn_approvalstatus property value. 
     * @param value Value to set for the msdyn_approvalstatus property.
     */
    public set msdyn_approvalstatus(value: number | undefined) {
        this._msdyn_approvalstatus = value;
    };
    /**
     * Gets the msdyn_approvedrejectedby property value. 
     * @returns a systemuser
     */
    public get msdyn_approvedrejectedby() {
        return this._msdyn_approvedrejectedby;
    };
    /**
     * Sets the msdyn_approvedrejectedby property value. 
     * @param value Value to set for the msdyn_approvedrejectedby property.
     */
    public set msdyn_approvedrejectedby(value: Systemuser | undefined) {
        this._msdyn_approvedrejectedby = value;
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
     * Gets the msdyn_dateexpected property value. 
     * @returns a Date
     */
    public get msdyn_dateexpected() {
        return this._msdyn_dateexpected;
    };
    /**
     * Sets the msdyn_dateexpected property value. 
     * @param value Value to set for the msdyn_dateexpected property.
     */
    public set msdyn_dateexpected(value: Date | undefined) {
        this._msdyn_dateexpected = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
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
     * Gets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder property value. 
     * @returns a msdyn_purchaseorderbill
     */
    public get msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder() {
        return this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder property.
     */
    public set msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder(value: Msdyn_purchaseorderbill[] | undefined) {
        this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder property value. 
     * @returns a msdyn_purchaseorderproduct
     */
    public get msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder() {
        return this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder property.
     */
    public set msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder(value: Msdyn_purchaseorderproduct[] | undefined) {
        this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder property value. 
     * @returns a msdyn_purchaseorderreceipt
     */
    public get msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder() {
        return this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder property.
     */
    public set msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder(value: Msdyn_purchaseorderreceipt[] | undefined) {
        this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder property value. 
     * @returns a msdyn_purchaseorderreceiptproduct
     */
    public get msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder() {
        return this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder property.
     */
    public set msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder(value: Msdyn_purchaseorderreceiptproduct[] | undefined) {
        this._msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO property value. 
     * @returns a msdyn_rtv
     */
    public get msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO() {
        return this._msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO property.
     */
    public set msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO(value: Msdyn_rtv[] | undefined) {
        this._msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO = value;
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
     * Gets the msdyn_orderedby property value. 
     * @returns a systemuser
     */
    public get msdyn_orderedby() {
        return this._msdyn_orderedby;
    };
    /**
     * Sets the msdyn_orderedby property value. 
     * @param value Value to set for the msdyn_orderedby property.
     */
    public set msdyn_orderedby(value: Systemuser | undefined) {
        this._msdyn_orderedby = value;
    };
    /**
     * Gets the msdyn_paymentterm property value. 
     * @returns a msdyn_paymentterm
     */
    public get msdyn_paymentterm() {
        return this._msdyn_paymentterm;
    };
    /**
     * Sets the msdyn_paymentterm property value. 
     * @param value Value to set for the msdyn_paymentterm property.
     */
    public set msdyn_paymentterm(value: Msdyn_paymentterm | undefined) {
        this._msdyn_paymentterm = value;
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
     * Gets the msdyn_purchaseorder_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_purchaseorder_ActivityPointers() {
        return this._msdyn_purchaseorder_ActivityPointers;
    };
    /**
     * Sets the msdyn_purchaseorder_ActivityPointers property value. 
     * @param value Value to set for the msdyn_purchaseorder_ActivityPointers property.
     */
    public set msdyn_purchaseorder_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_purchaseorder_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_purchaseorder_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_purchaseorder_Annotations() {
        return this._msdyn_purchaseorder_Annotations;
    };
    /**
     * Sets the msdyn_purchaseorder_Annotations property value. 
     * @param value Value to set for the msdyn_purchaseorder_Annotations property.
     */
    public set msdyn_purchaseorder_Annotations(value: Annotation[] | undefined) {
        this._msdyn_purchaseorder_Annotations = value;
    };
    /**
     * Gets the msdyn_purchaseorder_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_purchaseorder_Appointments() {
        return this._msdyn_purchaseorder_Appointments;
    };
    /**
     * Sets the msdyn_purchaseorder_Appointments property value. 
     * @param value Value to set for the msdyn_purchaseorder_Appointments property.
     */
    public set msdyn_purchaseorder_Appointments(value: Appointment[] | undefined) {
        this._msdyn_purchaseorder_Appointments = value;
    };
    /**
     * Gets the msdyn_purchaseorder_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_purchaseorder_AsyncOperations() {
        return this._msdyn_purchaseorder_AsyncOperations;
    };
    /**
     * Sets the msdyn_purchaseorder_AsyncOperations property value. 
     * @param value Value to set for the msdyn_purchaseorder_AsyncOperations property.
     */
    public set msdyn_purchaseorder_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_purchaseorder_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_purchaseorder_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_purchaseorder_BulkDeleteFailures() {
        return this._msdyn_purchaseorder_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_purchaseorder_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_purchaseorder_BulkDeleteFailures property.
     */
    public set msdyn_purchaseorder_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_purchaseorder_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_purchaseorder_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_purchaseorder_connections1() {
        return this._msdyn_purchaseorder_connections1;
    };
    /**
     * Sets the msdyn_purchaseorder_connections1 property value. 
     * @param value Value to set for the msdyn_purchaseorder_connections1 property.
     */
    public set msdyn_purchaseorder_connections1(value: Connection[] | undefined) {
        this._msdyn_purchaseorder_connections1 = value;
    };
    /**
     * Gets the msdyn_purchaseorder_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_purchaseorder_connections2() {
        return this._msdyn_purchaseorder_connections2;
    };
    /**
     * Sets the msdyn_purchaseorder_connections2 property value. 
     * @param value Value to set for the msdyn_purchaseorder_connections2 property.
     */
    public set msdyn_purchaseorder_connections2(value: Connection[] | undefined) {
        this._msdyn_purchaseorder_connections2 = value;
    };
    /**
     * Gets the msdyn_purchaseorder_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_purchaseorder_DuplicateBaseRecord() {
        return this._msdyn_purchaseorder_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_purchaseorder_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_purchaseorder_DuplicateBaseRecord property.
     */
    public set msdyn_purchaseorder_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_purchaseorder_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_purchaseorder_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_purchaseorder_DuplicateMatchingRecord() {
        return this._msdyn_purchaseorder_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_purchaseorder_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_purchaseorder_DuplicateMatchingRecord property.
     */
    public set msdyn_purchaseorder_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_purchaseorder_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_purchaseorder_Emails property value. 
     * @returns a email
     */
    public get msdyn_purchaseorder_Emails() {
        return this._msdyn_purchaseorder_Emails;
    };
    /**
     * Sets the msdyn_purchaseorder_Emails property value. 
     * @param value Value to set for the msdyn_purchaseorder_Emails property.
     */
    public set msdyn_purchaseorder_Emails(value: Email[] | undefined) {
        this._msdyn_purchaseorder_Emails = value;
    };
    /**
     * Gets the msdyn_purchaseorder_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_purchaseorder_Faxes() {
        return this._msdyn_purchaseorder_Faxes;
    };
    /**
     * Sets the msdyn_purchaseorder_Faxes property value. 
     * @param value Value to set for the msdyn_purchaseorder_Faxes property.
     */
    public set msdyn_purchaseorder_Faxes(value: Fax[] | undefined) {
        this._msdyn_purchaseorder_Faxes = value;
    };
    /**
     * Gets the msdyn_purchaseorder_Letters property value. 
     * @returns a letter
     */
    public get msdyn_purchaseorder_Letters() {
        return this._msdyn_purchaseorder_Letters;
    };
    /**
     * Sets the msdyn_purchaseorder_Letters property value. 
     * @param value Value to set for the msdyn_purchaseorder_Letters property.
     */
    public set msdyn_purchaseorder_Letters(value: Letter[] | undefined) {
        this._msdyn_purchaseorder_Letters = value;
    };
    /**
     * Gets the msdyn_purchaseorder_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_purchaseorder_MailboxTrackingFolders() {
        return this._msdyn_purchaseorder_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_purchaseorder_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_purchaseorder_MailboxTrackingFolders property.
     */
    public set msdyn_purchaseorder_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_purchaseorder_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_purchaseorder_msdyn_approvals() {
        return this._msdyn_purchaseorder_msdyn_approvals;
    };
    /**
     * Sets the msdyn_purchaseorder_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_purchaseorder_msdyn_approvals property.
     */
    public set msdyn_purchaseorder_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_purchaseorder_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_purchaseorder_msdyn_bookingalerts() {
        return this._msdyn_purchaseorder_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_purchaseorder_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_purchaseorder_msdyn_bookingalerts property.
     */
    public set msdyn_purchaseorder_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_purchaseorder_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_purchaseorder_msdyn_ocliveworkitems() {
        return this._msdyn_purchaseorder_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_purchaseorder_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_purchaseorder_msdyn_ocliveworkitems property.
     */
    public set msdyn_purchaseorder_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_purchaseorder_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_purchaseorder_msdyn_ocoutboundmessages() {
        return this._msdyn_purchaseorder_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_purchaseorder_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_purchaseorder_msdyn_ocoutboundmessages property.
     */
    public set msdyn_purchaseorder_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_purchaseorder_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_purchaseorder_msdyn_ocsessions() {
        return this._msdyn_purchaseorder_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_purchaseorder_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_purchaseorder_msdyn_ocsessions property.
     */
    public set msdyn_purchaseorder_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_purchaseorder_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_purchaseorder_msfp_alerts() {
        return this._msdyn_purchaseorder_msfp_alerts;
    };
    /**
     * Sets the msdyn_purchaseorder_msfp_alerts property value. 
     * @param value Value to set for the msdyn_purchaseorder_msfp_alerts property.
     */
    public set msdyn_purchaseorder_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_purchaseorder_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_purchaseorder_msfp_surveyinvites() {
        return this._msdyn_purchaseorder_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_purchaseorder_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_purchaseorder_msfp_surveyinvites property.
     */
    public set msdyn_purchaseorder_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_purchaseorder_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_purchaseorder_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_purchaseorder_msfp_surveyresponses() {
        return this._msdyn_purchaseorder_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_purchaseorder_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_purchaseorder_msfp_surveyresponses property.
     */
    public set msdyn_purchaseorder_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_purchaseorder_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_purchaseorder_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_purchaseorder_PhoneCalls() {
        return this._msdyn_purchaseorder_PhoneCalls;
    };
    /**
     * Sets the msdyn_purchaseorder_PhoneCalls property value. 
     * @param value Value to set for the msdyn_purchaseorder_PhoneCalls property.
     */
    public set msdyn_purchaseorder_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_purchaseorder_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_purchaseorder_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_purchaseorder_PrincipalObjectAttributeAccesses() {
        return this._msdyn_purchaseorder_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_purchaseorder_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_purchaseorder_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_purchaseorder_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_purchaseorder_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_purchaseorder_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_purchaseorder_ProcessSession() {
        return this._msdyn_purchaseorder_ProcessSession;
    };
    /**
     * Sets the msdyn_purchaseorder_ProcessSession property value. 
     * @param value Value to set for the msdyn_purchaseorder_ProcessSession property.
     */
    public set msdyn_purchaseorder_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_purchaseorder_ProcessSession = value;
    };
    /**
     * Gets the msdyn_purchaseorder_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_purchaseorder_RecurringAppointmentMasters() {
        return this._msdyn_purchaseorder_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_purchaseorder_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_purchaseorder_RecurringAppointmentMasters property.
     */
    public set msdyn_purchaseorder_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_purchaseorder_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_purchaseorder_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_purchaseorder_ServiceAppointments() {
        return this._msdyn_purchaseorder_ServiceAppointments;
    };
    /**
     * Sets the msdyn_purchaseorder_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_purchaseorder_ServiceAppointments property.
     */
    public set msdyn_purchaseorder_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_purchaseorder_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_purchaseorder_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_purchaseorder_SharePointDocumentLocations() {
        return this._msdyn_purchaseorder_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_purchaseorder_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_purchaseorder_SharePointDocumentLocations property.
     */
    public set msdyn_purchaseorder_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_purchaseorder_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_purchaseorder_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_purchaseorder_SocialActivities() {
        return this._msdyn_purchaseorder_SocialActivities;
    };
    /**
     * Sets the msdyn_purchaseorder_SocialActivities property value. 
     * @param value Value to set for the msdyn_purchaseorder_SocialActivities property.
     */
    public set msdyn_purchaseorder_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_purchaseorder_SocialActivities = value;
    };
    /**
     * Gets the msdyn_purchaseorder_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_purchaseorder_SyncErrors() {
        return this._msdyn_purchaseorder_SyncErrors;
    };
    /**
     * Sets the msdyn_purchaseorder_SyncErrors property value. 
     * @param value Value to set for the msdyn_purchaseorder_SyncErrors property.
     */
    public set msdyn_purchaseorder_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_purchaseorder_SyncErrors = value;
    };
    /**
     * Gets the msdyn_purchaseorder_Tasks property value. 
     * @returns a task
     */
    public get msdyn_purchaseorder_Tasks() {
        return this._msdyn_purchaseorder_Tasks;
    };
    /**
     * Sets the msdyn_purchaseorder_Tasks property value. 
     * @param value Value to set for the msdyn_purchaseorder_Tasks property.
     */
    public set msdyn_purchaseorder_Tasks(value: Task[] | undefined) {
        this._msdyn_purchaseorder_Tasks = value;
    };
    /**
     * Gets the msdyn_purchaseorderdate property value. 
     * @returns a Date
     */
    public get msdyn_purchaseorderdate() {
        return this._msdyn_purchaseorderdate;
    };
    /**
     * Sets the msdyn_purchaseorderdate property value. 
     * @param value Value to set for the msdyn_purchaseorderdate property.
     */
    public set msdyn_purchaseorderdate(value: Date | undefined) {
        this._msdyn_purchaseorderdate = value;
    };
    /**
     * Gets the msdyn_purchaseorderid property value. 
     * @returns a string
     */
    public get msdyn_purchaseorderid() {
        return this._msdyn_purchaseorderid;
    };
    /**
     * Sets the msdyn_purchaseorderid property value. 
     * @param value Value to set for the msdyn_purchaseorderid property.
     */
    public set msdyn_purchaseorderid(value: string | undefined) {
        this._msdyn_purchaseorderid = value;
    };
    /**
     * Gets the msdyn_receivetowarehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_receivetowarehouse() {
        return this._msdyn_receivetowarehouse;
    };
    /**
     * Sets the msdyn_receivetowarehouse property value. 
     * @param value Value to set for the msdyn_receivetowarehouse property.
     */
    public set msdyn_receivetowarehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_receivetowarehouse = value;
    };
    /**
     * Gets the msdyn_requestedbyresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_requestedbyresource() {
        return this._msdyn_requestedbyresource;
    };
    /**
     * Sets the msdyn_requestedbyresource property value. 
     * @param value Value to set for the msdyn_requestedbyresource property.
     */
    public set msdyn_requestedbyresource(value: Bookableresource | undefined) {
        this._msdyn_requestedbyresource = value;
    };
    /**
     * Gets the msdyn_shipto property value. 
     * @returns a integer
     */
    public get msdyn_shipto() {
        return this._msdyn_shipto;
    };
    /**
     * Sets the msdyn_shipto property value. 
     * @param value Value to set for the msdyn_shipto property.
     */
    public set msdyn_shipto(value: number | undefined) {
        this._msdyn_shipto = value;
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
     * @returns a msdyn_purchaseordersubstatus
     */
    public get msdyn_substatus() {
        return this._msdyn_substatus;
    };
    /**
     * Sets the msdyn_substatus property value. 
     * @param value Value to set for the msdyn_substatus property.
     */
    public set msdyn_substatus(value: Msdyn_purchaseordersubstatus | undefined) {
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
     * Gets the msdyn_vendornote property value. 
     * @returns a string
     */
    public get msdyn_vendornote() {
        return this._msdyn_vendornote;
    };
    /**
     * Sets the msdyn_vendornote property value. 
     * @param value Value to set for the msdyn_vendornote property.
     */
    public set msdyn_vendornote(value: string | undefined) {
        this._msdyn_vendornote = value;
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
        writer.writeStringValue("_msdyn_approvedrejectedby_value", this._msdyn_approvedrejectedby_value);
        writer.writeStringValue("_msdyn_booking_value", this._msdyn_booking_value);
        writer.writeStringValue("_msdyn_orderedby_value", this._msdyn_orderedby_value);
        writer.writeStringValue("_msdyn_paymentterm_value", this._msdyn_paymentterm_value);
        writer.writeStringValue("_msdyn_receivetowarehouse_value", this._msdyn_receivetowarehouse_value);
        writer.writeStringValue("_msdyn_requestedbyresource_value", this._msdyn_requestedbyresource_value);
        writer.writeStringValue("_msdyn_shipvia_value", this._msdyn_shipvia_value);
        writer.writeStringValue("_msdyn_substatus_value", this._msdyn_substatus_value);
        writer.writeStringValue("_msdyn_vendor_value", this._msdyn_vendor_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>("bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799", this.bpf_msdyn_purchaseorder_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799);
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
        writer.writeStringValue("msdyn_addressname", this.msdyn_addressname);
        writer.writeNumberValue("msdyn_amountbilled", this.msdyn_amountbilled);
        writer.writeNumberValue("msdyn_amountbilled_base", this.msdyn_amountbilled_base);
        writer.writeNumberValue("msdyn_approvalstatus", this.msdyn_approvalstatus);
        writer.writeObjectValue<Systemuser>("msdyn_approvedrejectedby", this.msdyn_approvedrejectedby);
        writer.writeStringValue("msdyn_autonumbering", this.msdyn_autonumbering);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_booking", this.msdyn_booking);
        writer.writeStringValue("msdyn_city", this.msdyn_city);
        writer.writeStringValue("msdyn_country", this.msdyn_country);
        writer.writeDateValue("msdyn_dateexpected", this.msdyn_dateexpected);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderbill>("msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder", this.msdyn_msdyn_purchaseorder_msdyn_purchaseorderbill_PurchaseOrder);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderproduct>("msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder", this.msdyn_msdyn_purchaseorder_msdyn_purchaseorderproduct_PurchaseOrder);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderreceipt>("msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder", this.msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceipt_PurchaseOrder);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>("msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder", this.msdyn_msdyn_purchaseorder_msdyn_purchaseorderreceiptproduct_PurchaseOrder);
        writer.writeCollectionOfObjectValues<Msdyn_rtv>("msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO", this.msdyn_msdyn_purchaseorder_msdyn_rtv_OriginalPO);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Systemuser>("msdyn_orderedby", this.msdyn_orderedby);
        writer.writeObjectValue<Msdyn_paymentterm>("msdyn_paymentterm", this.msdyn_paymentterm);
        writer.writeStringValue("msdyn_postalcode", this.msdyn_postalcode);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_purchaseorder_ActivityPointers", this.msdyn_purchaseorder_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_purchaseorder_Annotations", this.msdyn_purchaseorder_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_purchaseorder_Appointments", this.msdyn_purchaseorder_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_purchaseorder_AsyncOperations", this.msdyn_purchaseorder_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_purchaseorder_BulkDeleteFailures", this.msdyn_purchaseorder_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_purchaseorder_connections1", this.msdyn_purchaseorder_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_purchaseorder_connections2", this.msdyn_purchaseorder_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_purchaseorder_DuplicateBaseRecord", this.msdyn_purchaseorder_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_purchaseorder_DuplicateMatchingRecord", this.msdyn_purchaseorder_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_purchaseorder_Emails", this.msdyn_purchaseorder_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_purchaseorder_Faxes", this.msdyn_purchaseorder_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_purchaseorder_Letters", this.msdyn_purchaseorder_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_purchaseorder_MailboxTrackingFolders", this.msdyn_purchaseorder_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_purchaseorder_msdyn_approvals", this.msdyn_purchaseorder_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_purchaseorder_msdyn_bookingalerts", this.msdyn_purchaseorder_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_purchaseorder_msdyn_ocliveworkitems", this.msdyn_purchaseorder_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_purchaseorder_msdyn_ocoutboundmessages", this.msdyn_purchaseorder_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_purchaseorder_msdyn_ocsessions", this.msdyn_purchaseorder_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_purchaseorder_msfp_alerts", this.msdyn_purchaseorder_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_purchaseorder_msfp_surveyinvites", this.msdyn_purchaseorder_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_purchaseorder_msfp_surveyresponses", this.msdyn_purchaseorder_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_purchaseorder_PhoneCalls", this.msdyn_purchaseorder_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_purchaseorder_PrincipalObjectAttributeAccesses", this.msdyn_purchaseorder_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_purchaseorder_ProcessSession", this.msdyn_purchaseorder_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_purchaseorder_RecurringAppointmentMasters", this.msdyn_purchaseorder_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_purchaseorder_ServiceAppointments", this.msdyn_purchaseorder_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_purchaseorder_SharePointDocumentLocations", this.msdyn_purchaseorder_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_purchaseorder_SocialActivities", this.msdyn_purchaseorder_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_purchaseorder_SyncErrors", this.msdyn_purchaseorder_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_purchaseorder_Tasks", this.msdyn_purchaseorder_Tasks);
        writer.writeDateValue("msdyn_purchaseorderdate", this.msdyn_purchaseorderdate);
        writer.writeStringValue("msdyn_purchaseorderid", this.msdyn_purchaseorderid);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_receivetowarehouse", this.msdyn_receivetowarehouse);
        writer.writeObjectValue<Bookableresource>("msdyn_requestedbyresource", this.msdyn_requestedbyresource);
        writer.writeNumberValue("msdyn_shipto", this.msdyn_shipto);
        writer.writeObjectValue<Msdyn_shipvia>("msdyn_shipvia", this.msdyn_shipvia);
        writer.writeStringValue("msdyn_stateorprovince", this.msdyn_stateorprovince);
        writer.writeObjectValue<Msdyn_purchaseordersubstatus>("msdyn_substatus", this.msdyn_substatus);
        writer.writeNumberValue("msdyn_systemstatus", this.msdyn_systemstatus);
        writer.writeNumberValue("msdyn_totalamount", this.msdyn_totalamount);
        writer.writeNumberValue("msdyn_totalamount_base", this.msdyn_totalamount_base);
        writer.writeObjectValue<Account>("msdyn_vendor", this.msdyn_vendor);
        writer.writeStringValue("msdyn_vendornote", this.msdyn_vendornote);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorder", this.msdyn_workorder);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
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
}
