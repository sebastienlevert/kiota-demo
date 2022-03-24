import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
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
import {createMsdyn_rmaproductFromDiscriminatorValue} from './createMsdyn_rmaproductFromDiscriminatorValue';
import {createMsdyn_rmareceiptFromDiscriminatorValue} from './createMsdyn_rmareceiptFromDiscriminatorValue';
import {createMsdyn_rmareceiptproductFromDiscriminatorValue} from './createMsdyn_rmareceiptproductFromDiscriminatorValue';
import {createMsdyn_rmasubstatusFromDiscriminatorValue} from './createMsdyn_rmasubstatusFromDiscriminatorValue';
import {createMsdyn_rtvFromDiscriminatorValue} from './createMsdyn_rtvFromDiscriminatorValue';
import {createMsdyn_rtvproductFromDiscriminatorValue} from './createMsdyn_rtvproductFromDiscriminatorValue';
import {createMsdyn_shipviaFromDiscriminatorValue} from './createMsdyn_shipviaFromDiscriminatorValue';
import {createMsdyn_taxcodeFromDiscriminatorValue} from './createMsdyn_taxcodeFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
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
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Contact, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_rmaproduct, Msdyn_rmareceipt, Msdyn_rmareceiptproduct, Msdyn_rmasubstatus, Msdyn_rtv, Msdyn_rtvproduct, Msdyn_shipvia, Msdyn_taxcode, Msdyn_workorder, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_rma extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_approvedby_value?: string | undefined;
    private __msdyn_billingaccount_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_requestedbycontact_value?: string | undefined;
    private __msdyn_serviceaccount_value?: string | undefined;
    private __msdyn_shipvia_value?: string | undefined;
    private __msdyn_substatus_value?: string | undefined;
    private __msdyn_taxcode_value?: string | undefined;
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
    private _msdyn_approvedby?: Systemuser | undefined;
    private _msdyn_autonumbering?: string | undefined;
    private _msdyn_billingaccount?: Account | undefined;
    private _msdyn_daterequested?: Date | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_eta?: Date | undefined;
    private _msdyn_msdyn_rma_msdyn_rmaproduct_RMA?: Msdyn_rmaproduct[] | undefined;
    private _msdyn_msdyn_rma_msdyn_rmareceipt_RMA?: Msdyn_rmareceipt[] | undefined;
    private _msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA?: Msdyn_rmareceiptproduct[] | undefined;
    private _msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA?: Msdyn_rtv[] | undefined;
    private _msdyn_msdyn_rma_msdyn_rtvproduct_RMA?: Msdyn_rtvproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_packagingtrackingno?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_processingaction?: number | undefined;
    private _msdyn_referenceno?: string | undefined;
    private _msdyn_requestedbycontact?: Contact | undefined;
    private _msdyn_rma_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_rma_Annotations?: Annotation[] | undefined;
    private _msdyn_rma_Appointments?: Appointment[] | undefined;
    private _msdyn_rma_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_rma_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_rma_connections1?: Connection[] | undefined;
    private _msdyn_rma_connections2?: Connection[] | undefined;
    private _msdyn_rma_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rma_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rma_Emails?: Email[] | undefined;
    private _msdyn_rma_Faxes?: Fax[] | undefined;
    private _msdyn_rma_Letters?: Letter[] | undefined;
    private _msdyn_rma_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_rma_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_rma_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_rma_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_rma_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_rma_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_rma_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_rma_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_rma_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_rma_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_rma_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_rma_ProcessSession?: Processsession[] | undefined;
    private _msdyn_rma_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_rma_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_rma_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_rma_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_rma_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_rma_Tasks?: Task[] | undefined;
    private _msdyn_rmaid?: string | undefined;
    private _msdyn_serviceaccount?: Account | undefined;
    private _msdyn_shippingtrackingno?: string | undefined;
    private _msdyn_shipvia?: Msdyn_shipvia | undefined;
    private _msdyn_substatus?: Msdyn_rmasubstatus | undefined;
    private _msdyn_systemstatus?: number | undefined;
    private _msdyn_taxable?: boolean | undefined;
    private _msdyn_taxcode?: Msdyn_taxcode | undefined;
    private _msdyn_totalamount?: number | undefined;
    private _msdyn_totalamount_base?: number | undefined;
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
     * Gets the _msdyn_approvedby_value property value. 
     * @returns a string
     */
    public get _msdyn_approvedby_value() {
        return this.__msdyn_approvedby_value;
    };
    /**
     * Sets the _msdyn_approvedby_value property value. 
     * @param value Value to set for the _msdyn_approvedby_value property.
     */
    public set _msdyn_approvedby_value(value: string | undefined) {
        this.__msdyn_approvedby_value = value;
    };
    /**
     * Gets the _msdyn_billingaccount_value property value. 
     * @returns a string
     */
    public get _msdyn_billingaccount_value() {
        return this.__msdyn_billingaccount_value;
    };
    /**
     * Sets the _msdyn_billingaccount_value property value. 
     * @param value Value to set for the _msdyn_billingaccount_value property.
     */
    public set _msdyn_billingaccount_value(value: string | undefined) {
        this.__msdyn_billingaccount_value = value;
    };
    /**
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
    };
    /**
     * Gets the _msdyn_requestedbycontact_value property value. 
     * @returns a string
     */
    public get _msdyn_requestedbycontact_value() {
        return this.__msdyn_requestedbycontact_value;
    };
    /**
     * Sets the _msdyn_requestedbycontact_value property value. 
     * @param value Value to set for the _msdyn_requestedbycontact_value property.
     */
    public set _msdyn_requestedbycontact_value(value: string | undefined) {
        this.__msdyn_requestedbycontact_value = value;
    };
    /**
     * Gets the _msdyn_serviceaccount_value property value. 
     * @returns a string
     */
    public get _msdyn_serviceaccount_value() {
        return this.__msdyn_serviceaccount_value;
    };
    /**
     * Sets the _msdyn_serviceaccount_value property value. 
     * @param value Value to set for the _msdyn_serviceaccount_value property.
     */
    public set _msdyn_serviceaccount_value(value: string | undefined) {
        this.__msdyn_serviceaccount_value = value;
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
     * Instantiates a new msdyn_rma and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_rma)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rma)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_rma)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rma)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_approvedby_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_approvedby_value = n.getStringValue(); },
            "_msdyn_billingaccount_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_billingaccount_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_requestedbycontact_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_requestedbycontact_value = n.getStringValue(); },
            "_msdyn_serviceaccount_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_serviceaccount_value = n.getStringValue(); },
            "_msdyn_shipvia_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_shipvia_value = n.getStringValue(); },
            "_msdyn_substatus_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_substatus_value = n.getStringValue(); },
            "_msdyn_taxcode_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_taxcode_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_rma)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_rma)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_rma)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_rma)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_rma)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_rma)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_rma).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_rma).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_rma).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_rma).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_rma).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_rma).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_rma).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_rma).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_approvedby": (o, n) => { (o as unknown as Msdyn_rma).msdyn_approvedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autonumbering": (o, n) => { (o as unknown as Msdyn_rma).msdyn_autonumbering = n.getStringValue(); },
            "msdyn_billingaccount": (o, n) => { (o as unknown as Msdyn_rma).msdyn_billingaccount = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_daterequested": (o, n) => { (o as unknown as Msdyn_rma).msdyn_daterequested = n.getDateValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_rma).msdyn_description = n.getStringValue(); },
            "msdyn_eta": (o, n) => { (o as unknown as Msdyn_rma).msdyn_eta = n.getDateValue(); },
            "msdyn_msdyn_rma_msdyn_rmaproduct_RMA": (o, n) => { (o as unknown as Msdyn_rma).msdyn_msdyn_rma_msdyn_rmaproduct_RMA = n.getCollectionOfObjectValues<Msdyn_rmaproduct>(createMsdyn_rmaproductFromDiscriminatorValue); },
            "msdyn_msdyn_rma_msdyn_rmareceipt_RMA": (o, n) => { (o as unknown as Msdyn_rma).msdyn_msdyn_rma_msdyn_rmareceipt_RMA = n.getCollectionOfObjectValues<Msdyn_rmareceipt>(createMsdyn_rmareceiptFromDiscriminatorValue); },
            "msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA": (o, n) => { (o as unknown as Msdyn_rma).msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA = n.getCollectionOfObjectValues<Msdyn_rmareceiptproduct>(createMsdyn_rmareceiptproductFromDiscriminatorValue); },
            "msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA": (o, n) => { (o as unknown as Msdyn_rma).msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA = n.getCollectionOfObjectValues<Msdyn_rtv>(createMsdyn_rtvFromDiscriminatorValue); },
            "msdyn_msdyn_rma_msdyn_rtvproduct_RMA": (o, n) => { (o as unknown as Msdyn_rma).msdyn_msdyn_rma_msdyn_rtvproduct_RMA = n.getCollectionOfObjectValues<Msdyn_rtvproduct>(createMsdyn_rtvproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_rma).msdyn_name = n.getStringValue(); },
            "msdyn_packagingtrackingno": (o, n) => { (o as unknown as Msdyn_rma).msdyn_packagingtrackingno = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_rma).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_processingaction": (o, n) => { (o as unknown as Msdyn_rma).msdyn_processingaction = n.getNumberValue(); },
            "msdyn_referenceno": (o, n) => { (o as unknown as Msdyn_rma).msdyn_referenceno = n.getStringValue(); },
            "msdyn_requestedbycontact": (o, n) => { (o as unknown as Msdyn_rma).msdyn_requestedbycontact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_rma_ActivityPointers": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_rma_Annotations": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_rma_Appointments": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_rma_AsyncOperations": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_rma_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_rma_connections1": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rma_connections2": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_rma_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rma_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rma_Emails": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_rma_Faxes": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_rma_Letters": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_rma_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_rma_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_rma_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_rma_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_rma_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_rma_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_rma_msfp_alerts": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_rma_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_rma_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_rma_PhoneCalls": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_rma_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_rma_ProcessSession": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_rma_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_rma_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_rma_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_rma_SocialActivities": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_rma_SyncErrors": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_rma_Tasks": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rma_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_rmaid": (o, n) => { (o as unknown as Msdyn_rma).msdyn_rmaid = n.getStringValue(); },
            "msdyn_serviceaccount": (o, n) => { (o as unknown as Msdyn_rma).msdyn_serviceaccount = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_shippingtrackingno": (o, n) => { (o as unknown as Msdyn_rma).msdyn_shippingtrackingno = n.getStringValue(); },
            "msdyn_shipvia": (o, n) => { (o as unknown as Msdyn_rma).msdyn_shipvia = n.getObjectValue<Msdyn_shipvia>(createMsdyn_shipviaFromDiscriminatorValue); },
            "msdyn_substatus": (o, n) => { (o as unknown as Msdyn_rma).msdyn_substatus = n.getObjectValue<Msdyn_rmasubstatus>(createMsdyn_rmasubstatusFromDiscriminatorValue); },
            "msdyn_systemstatus": (o, n) => { (o as unknown as Msdyn_rma).msdyn_systemstatus = n.getNumberValue(); },
            "msdyn_taxable": (o, n) => { (o as unknown as Msdyn_rma).msdyn_taxable = n.getBooleanValue(); },
            "msdyn_taxcode": (o, n) => { (o as unknown as Msdyn_rma).msdyn_taxcode = n.getObjectValue<Msdyn_taxcode>(createMsdyn_taxcodeFromDiscriminatorValue); },
            "msdyn_totalamount": (o, n) => { (o as unknown as Msdyn_rma).msdyn_totalamount = n.getNumberValue(); },
            "msdyn_totalamount_base": (o, n) => { (o as unknown as Msdyn_rma).msdyn_totalamount_base = n.getNumberValue(); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_rma).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_rma).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_rma).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_rma).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_rma).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_rma).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_rma).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_rma).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_rma).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_rma).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_rma).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_rma).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_approvedby property value. 
     * @returns a systemuser
     */
    public get msdyn_approvedby() {
        return this._msdyn_approvedby;
    };
    /**
     * Sets the msdyn_approvedby property value. 
     * @param value Value to set for the msdyn_approvedby property.
     */
    public set msdyn_approvedby(value: Systemuser | undefined) {
        this._msdyn_approvedby = value;
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
     * Gets the msdyn_billingaccount property value. 
     * @returns a account
     */
    public get msdyn_billingaccount() {
        return this._msdyn_billingaccount;
    };
    /**
     * Sets the msdyn_billingaccount property value. 
     * @param value Value to set for the msdyn_billingaccount property.
     */
    public set msdyn_billingaccount(value: Account | undefined) {
        this._msdyn_billingaccount = value;
    };
    /**
     * Gets the msdyn_daterequested property value. 
     * @returns a Date
     */
    public get msdyn_daterequested() {
        return this._msdyn_daterequested;
    };
    /**
     * Sets the msdyn_daterequested property value. 
     * @param value Value to set for the msdyn_daterequested property.
     */
    public set msdyn_daterequested(value: Date | undefined) {
        this._msdyn_daterequested = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_eta property value. 
     * @returns a Date
     */
    public get msdyn_eta() {
        return this._msdyn_eta;
    };
    /**
     * Sets the msdyn_eta property value. 
     * @param value Value to set for the msdyn_eta property.
     */
    public set msdyn_eta(value: Date | undefined) {
        this._msdyn_eta = value;
    };
    /**
     * Gets the msdyn_msdyn_rma_msdyn_rmaproduct_RMA property value. 
     * @returns a msdyn_rmaproduct
     */
    public get msdyn_msdyn_rma_msdyn_rmaproduct_RMA() {
        return this._msdyn_msdyn_rma_msdyn_rmaproduct_RMA;
    };
    /**
     * Sets the msdyn_msdyn_rma_msdyn_rmaproduct_RMA property value. 
     * @param value Value to set for the msdyn_msdyn_rma_msdyn_rmaproduct_RMA property.
     */
    public set msdyn_msdyn_rma_msdyn_rmaproduct_RMA(value: Msdyn_rmaproduct[] | undefined) {
        this._msdyn_msdyn_rma_msdyn_rmaproduct_RMA = value;
    };
    /**
     * Gets the msdyn_msdyn_rma_msdyn_rmareceipt_RMA property value. 
     * @returns a msdyn_rmareceipt
     */
    public get msdyn_msdyn_rma_msdyn_rmareceipt_RMA() {
        return this._msdyn_msdyn_rma_msdyn_rmareceipt_RMA;
    };
    /**
     * Sets the msdyn_msdyn_rma_msdyn_rmareceipt_RMA property value. 
     * @param value Value to set for the msdyn_msdyn_rma_msdyn_rmareceipt_RMA property.
     */
    public set msdyn_msdyn_rma_msdyn_rmareceipt_RMA(value: Msdyn_rmareceipt[] | undefined) {
        this._msdyn_msdyn_rma_msdyn_rmareceipt_RMA = value;
    };
    /**
     * Gets the msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA property value. 
     * @returns a msdyn_rmareceiptproduct
     */
    public get msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA() {
        return this._msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA;
    };
    /**
     * Sets the msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA property value. 
     * @param value Value to set for the msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA property.
     */
    public set msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA(value: Msdyn_rmareceiptproduct[] | undefined) {
        this._msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA = value;
    };
    /**
     * Gets the msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA property value. 
     * @returns a msdyn_rtv
     */
    public get msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA() {
        return this._msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA;
    };
    /**
     * Sets the msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA property value. 
     * @param value Value to set for the msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA property.
     */
    public set msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA(value: Msdyn_rtv[] | undefined) {
        this._msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA = value;
    };
    /**
     * Gets the msdyn_msdyn_rma_msdyn_rtvproduct_RMA property value. 
     * @returns a msdyn_rtvproduct
     */
    public get msdyn_msdyn_rma_msdyn_rtvproduct_RMA() {
        return this._msdyn_msdyn_rma_msdyn_rtvproduct_RMA;
    };
    /**
     * Sets the msdyn_msdyn_rma_msdyn_rtvproduct_RMA property value. 
     * @param value Value to set for the msdyn_msdyn_rma_msdyn_rtvproduct_RMA property.
     */
    public set msdyn_msdyn_rma_msdyn_rtvproduct_RMA(value: Msdyn_rtvproduct[] | undefined) {
        this._msdyn_msdyn_rma_msdyn_rtvproduct_RMA = value;
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
     * Gets the msdyn_packagingtrackingno property value. 
     * @returns a string
     */
    public get msdyn_packagingtrackingno() {
        return this._msdyn_packagingtrackingno;
    };
    /**
     * Sets the msdyn_packagingtrackingno property value. 
     * @param value Value to set for the msdyn_packagingtrackingno property.
     */
    public set msdyn_packagingtrackingno(value: string | undefined) {
        this._msdyn_packagingtrackingno = value;
    };
    /**
     * Gets the msdyn_pricelist property value. 
     * @returns a pricelevel
     */
    public get msdyn_pricelist() {
        return this._msdyn_pricelist;
    };
    /**
     * Sets the msdyn_pricelist property value. 
     * @param value Value to set for the msdyn_pricelist property.
     */
    public set msdyn_pricelist(value: Pricelevel | undefined) {
        this._msdyn_pricelist = value;
    };
    /**
     * Gets the msdyn_processingaction property value. 
     * @returns a integer
     */
    public get msdyn_processingaction() {
        return this._msdyn_processingaction;
    };
    /**
     * Sets the msdyn_processingaction property value. 
     * @param value Value to set for the msdyn_processingaction property.
     */
    public set msdyn_processingaction(value: number | undefined) {
        this._msdyn_processingaction = value;
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
     * Gets the msdyn_requestedbycontact property value. 
     * @returns a contact
     */
    public get msdyn_requestedbycontact() {
        return this._msdyn_requestedbycontact;
    };
    /**
     * Sets the msdyn_requestedbycontact property value. 
     * @param value Value to set for the msdyn_requestedbycontact property.
     */
    public set msdyn_requestedbycontact(value: Contact | undefined) {
        this._msdyn_requestedbycontact = value;
    };
    /**
     * Gets the msdyn_rma_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_rma_ActivityPointers() {
        return this._msdyn_rma_ActivityPointers;
    };
    /**
     * Sets the msdyn_rma_ActivityPointers property value. 
     * @param value Value to set for the msdyn_rma_ActivityPointers property.
     */
    public set msdyn_rma_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_rma_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_rma_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_rma_Annotations() {
        return this._msdyn_rma_Annotations;
    };
    /**
     * Sets the msdyn_rma_Annotations property value. 
     * @param value Value to set for the msdyn_rma_Annotations property.
     */
    public set msdyn_rma_Annotations(value: Annotation[] | undefined) {
        this._msdyn_rma_Annotations = value;
    };
    /**
     * Gets the msdyn_rma_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_rma_Appointments() {
        return this._msdyn_rma_Appointments;
    };
    /**
     * Sets the msdyn_rma_Appointments property value. 
     * @param value Value to set for the msdyn_rma_Appointments property.
     */
    public set msdyn_rma_Appointments(value: Appointment[] | undefined) {
        this._msdyn_rma_Appointments = value;
    };
    /**
     * Gets the msdyn_rma_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_rma_AsyncOperations() {
        return this._msdyn_rma_AsyncOperations;
    };
    /**
     * Sets the msdyn_rma_AsyncOperations property value. 
     * @param value Value to set for the msdyn_rma_AsyncOperations property.
     */
    public set msdyn_rma_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_rma_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_rma_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_rma_BulkDeleteFailures() {
        return this._msdyn_rma_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_rma_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_rma_BulkDeleteFailures property.
     */
    public set msdyn_rma_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_rma_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_rma_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_rma_connections1() {
        return this._msdyn_rma_connections1;
    };
    /**
     * Sets the msdyn_rma_connections1 property value. 
     * @param value Value to set for the msdyn_rma_connections1 property.
     */
    public set msdyn_rma_connections1(value: Connection[] | undefined) {
        this._msdyn_rma_connections1 = value;
    };
    /**
     * Gets the msdyn_rma_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_rma_connections2() {
        return this._msdyn_rma_connections2;
    };
    /**
     * Sets the msdyn_rma_connections2 property value. 
     * @param value Value to set for the msdyn_rma_connections2 property.
     */
    public set msdyn_rma_connections2(value: Connection[] | undefined) {
        this._msdyn_rma_connections2 = value;
    };
    /**
     * Gets the msdyn_rma_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rma_DuplicateBaseRecord() {
        return this._msdyn_rma_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_rma_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_rma_DuplicateBaseRecord property.
     */
    public set msdyn_rma_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rma_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_rma_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rma_DuplicateMatchingRecord() {
        return this._msdyn_rma_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_rma_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_rma_DuplicateMatchingRecord property.
     */
    public set msdyn_rma_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rma_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_rma_Emails property value. 
     * @returns a email
     */
    public get msdyn_rma_Emails() {
        return this._msdyn_rma_Emails;
    };
    /**
     * Sets the msdyn_rma_Emails property value. 
     * @param value Value to set for the msdyn_rma_Emails property.
     */
    public set msdyn_rma_Emails(value: Email[] | undefined) {
        this._msdyn_rma_Emails = value;
    };
    /**
     * Gets the msdyn_rma_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_rma_Faxes() {
        return this._msdyn_rma_Faxes;
    };
    /**
     * Sets the msdyn_rma_Faxes property value. 
     * @param value Value to set for the msdyn_rma_Faxes property.
     */
    public set msdyn_rma_Faxes(value: Fax[] | undefined) {
        this._msdyn_rma_Faxes = value;
    };
    /**
     * Gets the msdyn_rma_Letters property value. 
     * @returns a letter
     */
    public get msdyn_rma_Letters() {
        return this._msdyn_rma_Letters;
    };
    /**
     * Sets the msdyn_rma_Letters property value. 
     * @param value Value to set for the msdyn_rma_Letters property.
     */
    public set msdyn_rma_Letters(value: Letter[] | undefined) {
        this._msdyn_rma_Letters = value;
    };
    /**
     * Gets the msdyn_rma_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_rma_MailboxTrackingFolders() {
        return this._msdyn_rma_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_rma_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_rma_MailboxTrackingFolders property.
     */
    public set msdyn_rma_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_rma_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_rma_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_rma_msdyn_approvals() {
        return this._msdyn_rma_msdyn_approvals;
    };
    /**
     * Sets the msdyn_rma_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_rma_msdyn_approvals property.
     */
    public set msdyn_rma_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_rma_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_rma_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_rma_msdyn_bookingalerts() {
        return this._msdyn_rma_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_rma_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_rma_msdyn_bookingalerts property.
     */
    public set msdyn_rma_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_rma_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_rma_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_rma_msdyn_ocliveworkitems() {
        return this._msdyn_rma_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_rma_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_rma_msdyn_ocliveworkitems property.
     */
    public set msdyn_rma_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_rma_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_rma_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_rma_msdyn_ocoutboundmessages() {
        return this._msdyn_rma_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_rma_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_rma_msdyn_ocoutboundmessages property.
     */
    public set msdyn_rma_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_rma_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_rma_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_rma_msdyn_ocsessions() {
        return this._msdyn_rma_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_rma_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_rma_msdyn_ocsessions property.
     */
    public set msdyn_rma_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_rma_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_rma_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_rma_msfp_alerts() {
        return this._msdyn_rma_msfp_alerts;
    };
    /**
     * Sets the msdyn_rma_msfp_alerts property value. 
     * @param value Value to set for the msdyn_rma_msfp_alerts property.
     */
    public set msdyn_rma_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_rma_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_rma_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_rma_msfp_surveyinvites() {
        return this._msdyn_rma_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_rma_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_rma_msfp_surveyinvites property.
     */
    public set msdyn_rma_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_rma_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_rma_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_rma_msfp_surveyresponses() {
        return this._msdyn_rma_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_rma_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_rma_msfp_surveyresponses property.
     */
    public set msdyn_rma_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_rma_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_rma_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_rma_PhoneCalls() {
        return this._msdyn_rma_PhoneCalls;
    };
    /**
     * Sets the msdyn_rma_PhoneCalls property value. 
     * @param value Value to set for the msdyn_rma_PhoneCalls property.
     */
    public set msdyn_rma_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_rma_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_rma_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_rma_PrincipalObjectAttributeAccesses() {
        return this._msdyn_rma_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_rma_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_rma_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_rma_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_rma_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_rma_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_rma_ProcessSession() {
        return this._msdyn_rma_ProcessSession;
    };
    /**
     * Sets the msdyn_rma_ProcessSession property value. 
     * @param value Value to set for the msdyn_rma_ProcessSession property.
     */
    public set msdyn_rma_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_rma_ProcessSession = value;
    };
    /**
     * Gets the msdyn_rma_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_rma_RecurringAppointmentMasters() {
        return this._msdyn_rma_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_rma_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_rma_RecurringAppointmentMasters property.
     */
    public set msdyn_rma_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_rma_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_rma_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_rma_ServiceAppointments() {
        return this._msdyn_rma_ServiceAppointments;
    };
    /**
     * Sets the msdyn_rma_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_rma_ServiceAppointments property.
     */
    public set msdyn_rma_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_rma_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_rma_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_rma_SharePointDocumentLocations() {
        return this._msdyn_rma_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_rma_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_rma_SharePointDocumentLocations property.
     */
    public set msdyn_rma_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_rma_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_rma_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_rma_SocialActivities() {
        return this._msdyn_rma_SocialActivities;
    };
    /**
     * Sets the msdyn_rma_SocialActivities property value. 
     * @param value Value to set for the msdyn_rma_SocialActivities property.
     */
    public set msdyn_rma_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_rma_SocialActivities = value;
    };
    /**
     * Gets the msdyn_rma_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_rma_SyncErrors() {
        return this._msdyn_rma_SyncErrors;
    };
    /**
     * Sets the msdyn_rma_SyncErrors property value. 
     * @param value Value to set for the msdyn_rma_SyncErrors property.
     */
    public set msdyn_rma_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_rma_SyncErrors = value;
    };
    /**
     * Gets the msdyn_rma_Tasks property value. 
     * @returns a task
     */
    public get msdyn_rma_Tasks() {
        return this._msdyn_rma_Tasks;
    };
    /**
     * Sets the msdyn_rma_Tasks property value. 
     * @param value Value to set for the msdyn_rma_Tasks property.
     */
    public set msdyn_rma_Tasks(value: Task[] | undefined) {
        this._msdyn_rma_Tasks = value;
    };
    /**
     * Gets the msdyn_rmaid property value. 
     * @returns a string
     */
    public get msdyn_rmaid() {
        return this._msdyn_rmaid;
    };
    /**
     * Sets the msdyn_rmaid property value. 
     * @param value Value to set for the msdyn_rmaid property.
     */
    public set msdyn_rmaid(value: string | undefined) {
        this._msdyn_rmaid = value;
    };
    /**
     * Gets the msdyn_serviceaccount property value. 
     * @returns a account
     */
    public get msdyn_serviceaccount() {
        return this._msdyn_serviceaccount;
    };
    /**
     * Sets the msdyn_serviceaccount property value. 
     * @param value Value to set for the msdyn_serviceaccount property.
     */
    public set msdyn_serviceaccount(value: Account | undefined) {
        this._msdyn_serviceaccount = value;
    };
    /**
     * Gets the msdyn_shippingtrackingno property value. 
     * @returns a string
     */
    public get msdyn_shippingtrackingno() {
        return this._msdyn_shippingtrackingno;
    };
    /**
     * Sets the msdyn_shippingtrackingno property value. 
     * @param value Value to set for the msdyn_shippingtrackingno property.
     */
    public set msdyn_shippingtrackingno(value: string | undefined) {
        this._msdyn_shippingtrackingno = value;
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
     * Gets the msdyn_substatus property value. 
     * @returns a msdyn_rmasubstatus
     */
    public get msdyn_substatus() {
        return this._msdyn_substatus;
    };
    /**
     * Sets the msdyn_substatus property value. 
     * @param value Value to set for the msdyn_substatus property.
     */
    public set msdyn_substatus(value: Msdyn_rmasubstatus | undefined) {
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
     * Gets the msdyn_taxable property value. 
     * @returns a boolean
     */
    public get msdyn_taxable() {
        return this._msdyn_taxable;
    };
    /**
     * Sets the msdyn_taxable property value. 
     * @param value Value to set for the msdyn_taxable property.
     */
    public set msdyn_taxable(value: boolean | undefined) {
        this._msdyn_taxable = value;
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
        writer.writeStringValue("_msdyn_approvedby_value", this._msdyn_approvedby_value);
        writer.writeStringValue("_msdyn_billingaccount_value", this._msdyn_billingaccount_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_requestedbycontact_value", this._msdyn_requestedbycontact_value);
        writer.writeStringValue("_msdyn_serviceaccount_value", this._msdyn_serviceaccount_value);
        writer.writeStringValue("_msdyn_shipvia_value", this._msdyn_shipvia_value);
        writer.writeStringValue("_msdyn_substatus_value", this._msdyn_substatus_value);
        writer.writeStringValue("_msdyn_taxcode_value", this._msdyn_taxcode_value);
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
        writer.writeObjectValue<Systemuser>("msdyn_approvedby", this.msdyn_approvedby);
        writer.writeStringValue("msdyn_autonumbering", this.msdyn_autonumbering);
        writer.writeObjectValue<Account>("msdyn_billingaccount", this.msdyn_billingaccount);
        writer.writeDateValue("msdyn_daterequested", this.msdyn_daterequested);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeDateValue("msdyn_eta", this.msdyn_eta);
        writer.writeCollectionOfObjectValues<Msdyn_rmaproduct>("msdyn_msdyn_rma_msdyn_rmaproduct_RMA", this.msdyn_msdyn_rma_msdyn_rmaproduct_RMA);
        writer.writeCollectionOfObjectValues<Msdyn_rmareceipt>("msdyn_msdyn_rma_msdyn_rmareceipt_RMA", this.msdyn_msdyn_rma_msdyn_rmareceipt_RMA);
        writer.writeCollectionOfObjectValues<Msdyn_rmareceiptproduct>("msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA", this.msdyn_msdyn_rma_msdyn_rmareceiptproduct_RMA);
        writer.writeCollectionOfObjectValues<Msdyn_rtv>("msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA", this.msdyn_msdyn_rma_msdyn_rtv_OriginatingRMA);
        writer.writeCollectionOfObjectValues<Msdyn_rtvproduct>("msdyn_msdyn_rma_msdyn_rtvproduct_RMA", this.msdyn_msdyn_rma_msdyn_rtvproduct_RMA);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_packagingtrackingno", this.msdyn_packagingtrackingno);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeNumberValue("msdyn_processingaction", this.msdyn_processingaction);
        writer.writeStringValue("msdyn_referenceno", this.msdyn_referenceno);
        writer.writeObjectValue<Contact>("msdyn_requestedbycontact", this.msdyn_requestedbycontact);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_rma_ActivityPointers", this.msdyn_rma_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_rma_Annotations", this.msdyn_rma_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_rma_Appointments", this.msdyn_rma_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_rma_AsyncOperations", this.msdyn_rma_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_rma_BulkDeleteFailures", this.msdyn_rma_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rma_connections1", this.msdyn_rma_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_rma_connections2", this.msdyn_rma_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rma_DuplicateBaseRecord", this.msdyn_rma_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rma_DuplicateMatchingRecord", this.msdyn_rma_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_rma_Emails", this.msdyn_rma_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_rma_Faxes", this.msdyn_rma_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_rma_Letters", this.msdyn_rma_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_rma_MailboxTrackingFolders", this.msdyn_rma_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_rma_msdyn_approvals", this.msdyn_rma_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_rma_msdyn_bookingalerts", this.msdyn_rma_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_rma_msdyn_ocliveworkitems", this.msdyn_rma_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_rma_msdyn_ocoutboundmessages", this.msdyn_rma_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_rma_msdyn_ocsessions", this.msdyn_rma_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_rma_msfp_alerts", this.msdyn_rma_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_rma_msfp_surveyinvites", this.msdyn_rma_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_rma_msfp_surveyresponses", this.msdyn_rma_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_rma_PhoneCalls", this.msdyn_rma_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_rma_PrincipalObjectAttributeAccesses", this.msdyn_rma_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_rma_ProcessSession", this.msdyn_rma_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_rma_RecurringAppointmentMasters", this.msdyn_rma_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_rma_ServiceAppointments", this.msdyn_rma_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_rma_SharePointDocumentLocations", this.msdyn_rma_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_rma_SocialActivities", this.msdyn_rma_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_rma_SyncErrors", this.msdyn_rma_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_rma_Tasks", this.msdyn_rma_Tasks);
        writer.writeStringValue("msdyn_rmaid", this.msdyn_rmaid);
        writer.writeObjectValue<Account>("msdyn_serviceaccount", this.msdyn_serviceaccount);
        writer.writeStringValue("msdyn_shippingtrackingno", this.msdyn_shippingtrackingno);
        writer.writeObjectValue<Msdyn_shipvia>("msdyn_shipvia", this.msdyn_shipvia);
        writer.writeObjectValue<Msdyn_rmasubstatus>("msdyn_substatus", this.msdyn_substatus);
        writer.writeNumberValue("msdyn_systemstatus", this.msdyn_systemstatus);
        writer.writeBooleanValue("msdyn_taxable", this.msdyn_taxable);
        writer.writeObjectValue<Msdyn_taxcode>("msdyn_taxcode", this.msdyn_taxcode);
        writer.writeNumberValue("msdyn_totalamount", this.msdyn_totalamount);
        writer.writeNumberValue("msdyn_totalamount_base", this.msdyn_totalamount_base);
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
