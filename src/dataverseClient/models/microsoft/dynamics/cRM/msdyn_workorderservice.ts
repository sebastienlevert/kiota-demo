import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingserviceFromDiscriminatorValue} from './createMsdyn_agreementbookingserviceFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderincidentFromDiscriminatorValue} from './createMsdyn_workorderincidentFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Entitlement, Fax, Invoicedetail, Letter, Mailboxtrackingfolder, Msdyn_agreementbookingservice, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_workorder, Msdyn_workorderincident, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Queueitem, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_workorderservice extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreementbookingservice_value?: string | undefined;
    private __msdyn_booking_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_entitlement_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_service_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __msdyn_workorderincident_value?: string | undefined;
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
    private _msdyn_additionalcost?: number | undefined;
    private _msdyn_additionalcost_base?: number | undefined;
    private _msdyn_agreementbookingservice?: Msdyn_agreementbookingservice | undefined;
    private _msdyn_booking?: Bookableresourcebooking | undefined;
    private _msdyn_calculatedunitamount?: number | undefined;
    private _msdyn_calculatedunitamount_base?: number | undefined;
    private _msdyn_commissioncosts?: number | undefined;
    private _msdyn_commissioncosts_base?: number | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_disableentitlement?: boolean | undefined;
    private _msdyn_discountamount?: number | undefined;
    private _msdyn_discountamount_base?: number | undefined;
    private _msdyn_discountpercent?: number | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_durationtobill?: number | undefined;
    private _msdyn_entitlement?: Entitlement | undefined;
    private _msdyn_estimatecalculatedunitamount?: number | undefined;
    private _msdyn_estimatecalculatedunitamount_base?: number | undefined;
    private _msdyn_estimatediscountamount?: number | undefined;
    private _msdyn_estimatediscountamount_base?: number | undefined;
    private _msdyn_estimatediscountpercent?: number | undefined;
    private _msdyn_estimateduration?: number | undefined;
    private _msdyn_estimatesubtotal?: number | undefined;
    private _msdyn_estimatesubtotal_base?: number | undefined;
    private _msdyn_estimatetotalamount?: number | undefined;
    private _msdyn_estimatetotalamount_base?: number | undefined;
    private _msdyn_estimatetotalcost?: number | undefined;
    private _msdyn_estimatetotalcost_base?: number | undefined;
    private _msdyn_estimateunitamount?: number | undefined;
    private _msdyn_estimateunitamount_base?: number | undefined;
    private _msdyn_estimateunitcost?: number | undefined;
    private _msdyn_estimateunitcost_base?: number | undefined;
    private _msdyn_internaldescription?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_linestatus?: number | undefined;
    private _msdyn_minimumchargeamount?: number | undefined;
    private _msdyn_minimumchargeamount_base?: number | undefined;
    private _msdyn_minimumchargeduration?: number | undefined;
    private _msdyn_msdyn_workorderservice_invoicedetail?: Invoicedetail[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_service?: Product | undefined;
    private _msdyn_subtotal?: number | undefined;
    private _msdyn_subtotal_base?: number | undefined;
    private _msdyn_taxable?: boolean | undefined;
    private _msdyn_totalamount?: number | undefined;
    private _msdyn_totalamount_base?: number | undefined;
    private _msdyn_totalcost?: number | undefined;
    private _msdyn_totalcost_base?: number | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_unitamount?: number | undefined;
    private _msdyn_unitamount_base?: number | undefined;
    private _msdyn_unitcost?: number | undefined;
    private _msdyn_unitcost_base?: number | undefined;
    private _msdyn_workorder?: Msdyn_workorder | undefined;
    private _msdyn_workorderincident?: Msdyn_workorderincident | undefined;
    private _msdyn_workorderservice_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_workorderservice_Annotations?: Annotation[] | undefined;
    private _msdyn_workorderservice_Appointments?: Appointment[] | undefined;
    private _msdyn_workorderservice_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_workorderservice_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_workorderservice_connections1?: Connection[] | undefined;
    private _msdyn_workorderservice_connections2?: Connection[] | undefined;
    private _msdyn_workorderservice_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderservice_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderservice_Emails?: Email[] | undefined;
    private _msdyn_workorderservice_Faxes?: Fax[] | undefined;
    private _msdyn_workorderservice_Letters?: Letter[] | undefined;
    private _msdyn_workorderservice_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_workorderservice_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_workorderservice_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_workorderservice_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_workorderservice_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_workorderservice_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_workorderservice_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_workorderservice_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_workorderservice_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_workorderservice_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_workorderservice_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_workorderservice_ProcessSession?: Processsession[] | undefined;
    private _msdyn_workorderservice_QueueItems?: Queueitem[] | undefined;
    private _msdyn_workorderservice_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_workorderservice_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_workorderservice_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_workorderservice_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_workorderservice_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_workorderservice_Tasks?: Task[] | undefined;
    private _msdyn_workorderserviceid?: string | undefined;
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
     * Gets the _msdyn_agreementbookingservice_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingservice_value() {
        return this.__msdyn_agreementbookingservice_value;
    };
    /**
     * Sets the _msdyn_agreementbookingservice_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingservice_value property.
     */
    public set _msdyn_agreementbookingservice_value(value: string | undefined) {
        this.__msdyn_agreementbookingservice_value = value;
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
     * Gets the _msdyn_customerasset_value property value. 
     * @returns a string
     */
    public get _msdyn_customerasset_value() {
        return this.__msdyn_customerasset_value;
    };
    /**
     * Sets the _msdyn_customerasset_value property value. 
     * @param value Value to set for the _msdyn_customerasset_value property.
     */
    public set _msdyn_customerasset_value(value: string | undefined) {
        this.__msdyn_customerasset_value = value;
    };
    /**
     * Gets the _msdyn_entitlement_value property value. 
     * @returns a string
     */
    public get _msdyn_entitlement_value() {
        return this.__msdyn_entitlement_value;
    };
    /**
     * Sets the _msdyn_entitlement_value property value. 
     * @param value Value to set for the _msdyn_entitlement_value property.
     */
    public set _msdyn_entitlement_value(value: string | undefined) {
        this.__msdyn_entitlement_value = value;
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
     * Gets the _msdyn_service_value property value. 
     * @returns a string
     */
    public get _msdyn_service_value() {
        return this.__msdyn_service_value;
    };
    /**
     * Sets the _msdyn_service_value property value. 
     * @param value Value to set for the _msdyn_service_value property.
     */
    public set _msdyn_service_value(value: string | undefined) {
        this.__msdyn_service_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
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
     * Gets the _msdyn_workorderincident_value property value. 
     * @returns a string
     */
    public get _msdyn_workorderincident_value() {
        return this.__msdyn_workorderincident_value;
    };
    /**
     * Sets the _msdyn_workorderincident_value property value. 
     * @param value Value to set for the _msdyn_workorderincident_value property.
     */
    public set _msdyn_workorderincident_value(value: string | undefined) {
        this.__msdyn_workorderincident_value = value;
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
     * Instantiates a new msdyn_workorderservice and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreementbookingservice_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_agreementbookingservice_value = n.getStringValue(); },
            "_msdyn_booking_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_booking_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_entitlement_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_entitlement_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_service_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_service_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_workorder_value = n.getStringValue(); },
            "_msdyn_workorderincident_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._msdyn_workorderincident_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_workorderservice)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_workorderservice).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_workorderservice).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderservice).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_workorderservice).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_workorderservice).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_workorderservice).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_workorderservice).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderservice).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_additionalcost": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_additionalcost = n.getNumberValue(); },
            "msdyn_additionalcost_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_additionalcost_base = n.getNumberValue(); },
            "msdyn_agreementbookingservice": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_agreementbookingservice = n.getObjectValue<Msdyn_agreementbookingservice>(createMsdyn_agreementbookingserviceFromDiscriminatorValue); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_booking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_calculatedunitamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_calculatedunitamount = n.getNumberValue(); },
            "msdyn_calculatedunitamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_calculatedunitamount_base = n.getNumberValue(); },
            "msdyn_commissioncosts": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_commissioncosts = n.getNumberValue(); },
            "msdyn_commissioncosts_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_commissioncosts_base = n.getNumberValue(); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_description = n.getStringValue(); },
            "msdyn_disableentitlement": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_disableentitlement = n.getBooleanValue(); },
            "msdyn_discountamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_discountamount = n.getNumberValue(); },
            "msdyn_discountamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_discountamount_base = n.getNumberValue(); },
            "msdyn_discountpercent": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_discountpercent = n.getNumberValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_duration = n.getNumberValue(); },
            "msdyn_durationtobill": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_durationtobill = n.getNumberValue(); },
            "msdyn_entitlement": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_entitlement = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "msdyn_estimatecalculatedunitamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatecalculatedunitamount = n.getNumberValue(); },
            "msdyn_estimatecalculatedunitamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatecalculatedunitamount_base = n.getNumberValue(); },
            "msdyn_estimatediscountamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatediscountamount = n.getNumberValue(); },
            "msdyn_estimatediscountamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatediscountamount_base = n.getNumberValue(); },
            "msdyn_estimatediscountpercent": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatediscountpercent = n.getNumberValue(); },
            "msdyn_estimateduration": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimateduration = n.getNumberValue(); },
            "msdyn_estimatesubtotal": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatesubtotal = n.getNumberValue(); },
            "msdyn_estimatesubtotal_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatesubtotal_base = n.getNumberValue(); },
            "msdyn_estimatetotalamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatetotalamount = n.getNumberValue(); },
            "msdyn_estimatetotalamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatetotalamount_base = n.getNumberValue(); },
            "msdyn_estimatetotalcost": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatetotalcost = n.getNumberValue(); },
            "msdyn_estimatetotalcost_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimatetotalcost_base = n.getNumberValue(); },
            "msdyn_estimateunitamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimateunitamount = n.getNumberValue(); },
            "msdyn_estimateunitamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimateunitamount_base = n.getNumberValue(); },
            "msdyn_estimateunitcost": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimateunitcost = n.getNumberValue(); },
            "msdyn_estimateunitcost_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_estimateunitcost_base = n.getNumberValue(); },
            "msdyn_internaldescription": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_internaldescription = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_internalflags = n.getStringValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_linestatus": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_linestatus = n.getNumberValue(); },
            "msdyn_minimumchargeamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_minimumchargeamount = n.getNumberValue(); },
            "msdyn_minimumchargeamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_minimumchargeamount_base = n.getNumberValue(); },
            "msdyn_minimumchargeduration": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_minimumchargeduration = n.getNumberValue(); },
            "msdyn_msdyn_workorderservice_invoicedetail": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_msdyn_workorderservice_invoicedetail = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_name = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_service": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_service = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_subtotal": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_subtotal = n.getNumberValue(); },
            "msdyn_subtotal_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_subtotal_base = n.getNumberValue(); },
            "msdyn_taxable": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_taxable = n.getBooleanValue(); },
            "msdyn_totalamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_totalamount = n.getNumberValue(); },
            "msdyn_totalamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_totalamount_base = n.getNumberValue(); },
            "msdyn_totalcost": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_totalcost = n.getNumberValue(); },
            "msdyn_totalcost_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_totalcost_base = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_unitamount": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_unitamount = n.getNumberValue(); },
            "msdyn_unitamount_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_unitamount_base = n.getNumberValue(); },
            "msdyn_unitcost": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_unitcost = n.getNumberValue(); },
            "msdyn_unitcost_base": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_unitcost_base = n.getNumberValue(); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_workorderincident": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderincident = n.getObjectValue<Msdyn_workorderincident>(createMsdyn_workorderincidentFromDiscriminatorValue); },
            "msdyn_workorderservice_ActivityPointers": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_workorderservice_Annotations": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_workorderservice_Appointments": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_workorderservice_AsyncOperations": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_workorderservice_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_workorderservice_connections1": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_workorderservice_connections2": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_workorderservice_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderservice_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderservice_Emails": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_workorderservice_Faxes": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_workorderservice_Letters": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_workorderservice_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_workorderservice_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_workorderservice_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_workorderservice_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_workorderservice_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_workorderservice_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_workorderservice_msfp_alerts": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_workorderservice_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_workorderservice_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_workorderservice_PhoneCalls": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_workorderservice_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_workorderservice_ProcessSession": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_workorderservice_QueueItems": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_workorderservice_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_workorderservice_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_workorderservice_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_workorderservice_SocialActivities": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_workorderservice_SyncErrors": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_workorderservice_Tasks": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderservice_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_workorderserviceid": (o, n) => { (o as unknown as Msdyn_workorderservice).msdyn_workorderserviceid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_workorderservice).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_workorderservice).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_workorderservice).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_workorderservice).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_workorderservice).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_workorderservice).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_workorderservice).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_workorderservice).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_workorderservice).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_workorderservice).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_workorderservice).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_additionalcost property value. 
     * @returns a int64
     */
    public get msdyn_additionalcost() {
        return this._msdyn_additionalcost;
    };
    /**
     * Sets the msdyn_additionalcost property value. 
     * @param value Value to set for the msdyn_additionalcost property.
     */
    public set msdyn_additionalcost(value: number | undefined) {
        this._msdyn_additionalcost = value;
    };
    /**
     * Gets the msdyn_additionalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_additionalcost_base() {
        return this._msdyn_additionalcost_base;
    };
    /**
     * Sets the msdyn_additionalcost_base property value. 
     * @param value Value to set for the msdyn_additionalcost_base property.
     */
    public set msdyn_additionalcost_base(value: number | undefined) {
        this._msdyn_additionalcost_base = value;
    };
    /**
     * Gets the msdyn_agreementbookingservice property value. 
     * @returns a msdyn_agreementbookingservice
     */
    public get msdyn_agreementbookingservice() {
        return this._msdyn_agreementbookingservice;
    };
    /**
     * Sets the msdyn_agreementbookingservice property value. 
     * @param value Value to set for the msdyn_agreementbookingservice property.
     */
    public set msdyn_agreementbookingservice(value: Msdyn_agreementbookingservice | undefined) {
        this._msdyn_agreementbookingservice = value;
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
     * Gets the msdyn_calculatedunitamount property value. 
     * @returns a int64
     */
    public get msdyn_calculatedunitamount() {
        return this._msdyn_calculatedunitamount;
    };
    /**
     * Sets the msdyn_calculatedunitamount property value. 
     * @param value Value to set for the msdyn_calculatedunitamount property.
     */
    public set msdyn_calculatedunitamount(value: number | undefined) {
        this._msdyn_calculatedunitamount = value;
    };
    /**
     * Gets the msdyn_calculatedunitamount_base property value. 
     * @returns a int64
     */
    public get msdyn_calculatedunitamount_base() {
        return this._msdyn_calculatedunitamount_base;
    };
    /**
     * Sets the msdyn_calculatedunitamount_base property value. 
     * @param value Value to set for the msdyn_calculatedunitamount_base property.
     */
    public set msdyn_calculatedunitamount_base(value: number | undefined) {
        this._msdyn_calculatedunitamount_base = value;
    };
    /**
     * Gets the msdyn_commissioncosts property value. 
     * @returns a int64
     */
    public get msdyn_commissioncosts() {
        return this._msdyn_commissioncosts;
    };
    /**
     * Sets the msdyn_commissioncosts property value. 
     * @param value Value to set for the msdyn_commissioncosts property.
     */
    public set msdyn_commissioncosts(value: number | undefined) {
        this._msdyn_commissioncosts = value;
    };
    /**
     * Gets the msdyn_commissioncosts_base property value. 
     * @returns a int64
     */
    public get msdyn_commissioncosts_base() {
        return this._msdyn_commissioncosts_base;
    };
    /**
     * Sets the msdyn_commissioncosts_base property value. 
     * @param value Value to set for the msdyn_commissioncosts_base property.
     */
    public set msdyn_commissioncosts_base(value: number | undefined) {
        this._msdyn_commissioncosts_base = value;
    };
    /**
     * Gets the msdyn_customerasset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_customerasset() {
        return this._msdyn_customerasset;
    };
    /**
     * Sets the msdyn_customerasset property value. 
     * @param value Value to set for the msdyn_customerasset property.
     */
    public set msdyn_customerasset(value: Msdyn_customerasset | undefined) {
        this._msdyn_customerasset = value;
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
     * Gets the msdyn_disableentitlement property value. 
     * @returns a boolean
     */
    public get msdyn_disableentitlement() {
        return this._msdyn_disableentitlement;
    };
    /**
     * Sets the msdyn_disableentitlement property value. 
     * @param value Value to set for the msdyn_disableentitlement property.
     */
    public set msdyn_disableentitlement(value: boolean | undefined) {
        this._msdyn_disableentitlement = value;
    };
    /**
     * Gets the msdyn_discountamount property value. 
     * @returns a int64
     */
    public get msdyn_discountamount() {
        return this._msdyn_discountamount;
    };
    /**
     * Sets the msdyn_discountamount property value. 
     * @param value Value to set for the msdyn_discountamount property.
     */
    public set msdyn_discountamount(value: number | undefined) {
        this._msdyn_discountamount = value;
    };
    /**
     * Gets the msdyn_discountamount_base property value. 
     * @returns a int64
     */
    public get msdyn_discountamount_base() {
        return this._msdyn_discountamount_base;
    };
    /**
     * Sets the msdyn_discountamount_base property value. 
     * @param value Value to set for the msdyn_discountamount_base property.
     */
    public set msdyn_discountamount_base(value: number | undefined) {
        this._msdyn_discountamount_base = value;
    };
    /**
     * Gets the msdyn_discountpercent property value. 
     * @returns a double
     */
    public get msdyn_discountpercent() {
        return this._msdyn_discountpercent;
    };
    /**
     * Sets the msdyn_discountpercent property value. 
     * @param value Value to set for the msdyn_discountpercent property.
     */
    public set msdyn_discountpercent(value: number | undefined) {
        this._msdyn_discountpercent = value;
    };
    /**
     * Gets the msdyn_duration property value. 
     * @returns a integer
     */
    public get msdyn_duration() {
        return this._msdyn_duration;
    };
    /**
     * Sets the msdyn_duration property value. 
     * @param value Value to set for the msdyn_duration property.
     */
    public set msdyn_duration(value: number | undefined) {
        this._msdyn_duration = value;
    };
    /**
     * Gets the msdyn_durationtobill property value. 
     * @returns a integer
     */
    public get msdyn_durationtobill() {
        return this._msdyn_durationtobill;
    };
    /**
     * Sets the msdyn_durationtobill property value. 
     * @param value Value to set for the msdyn_durationtobill property.
     */
    public set msdyn_durationtobill(value: number | undefined) {
        this._msdyn_durationtobill = value;
    };
    /**
     * Gets the msdyn_entitlement property value. 
     * @returns a entitlement
     */
    public get msdyn_entitlement() {
        return this._msdyn_entitlement;
    };
    /**
     * Sets the msdyn_entitlement property value. 
     * @param value Value to set for the msdyn_entitlement property.
     */
    public set msdyn_entitlement(value: Entitlement | undefined) {
        this._msdyn_entitlement = value;
    };
    /**
     * Gets the msdyn_estimatecalculatedunitamount property value. 
     * @returns a int64
     */
    public get msdyn_estimatecalculatedunitamount() {
        return this._msdyn_estimatecalculatedunitamount;
    };
    /**
     * Sets the msdyn_estimatecalculatedunitamount property value. 
     * @param value Value to set for the msdyn_estimatecalculatedunitamount property.
     */
    public set msdyn_estimatecalculatedunitamount(value: number | undefined) {
        this._msdyn_estimatecalculatedunitamount = value;
    };
    /**
     * Gets the msdyn_estimatecalculatedunitamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatecalculatedunitamount_base() {
        return this._msdyn_estimatecalculatedunitamount_base;
    };
    /**
     * Sets the msdyn_estimatecalculatedunitamount_base property value. 
     * @param value Value to set for the msdyn_estimatecalculatedunitamount_base property.
     */
    public set msdyn_estimatecalculatedunitamount_base(value: number | undefined) {
        this._msdyn_estimatecalculatedunitamount_base = value;
    };
    /**
     * Gets the msdyn_estimatediscountamount property value. 
     * @returns a int64
     */
    public get msdyn_estimatediscountamount() {
        return this._msdyn_estimatediscountamount;
    };
    /**
     * Sets the msdyn_estimatediscountamount property value. 
     * @param value Value to set for the msdyn_estimatediscountamount property.
     */
    public set msdyn_estimatediscountamount(value: number | undefined) {
        this._msdyn_estimatediscountamount = value;
    };
    /**
     * Gets the msdyn_estimatediscountamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatediscountamount_base() {
        return this._msdyn_estimatediscountamount_base;
    };
    /**
     * Sets the msdyn_estimatediscountamount_base property value. 
     * @param value Value to set for the msdyn_estimatediscountamount_base property.
     */
    public set msdyn_estimatediscountamount_base(value: number | undefined) {
        this._msdyn_estimatediscountamount_base = value;
    };
    /**
     * Gets the msdyn_estimatediscountpercent property value. 
     * @returns a double
     */
    public get msdyn_estimatediscountpercent() {
        return this._msdyn_estimatediscountpercent;
    };
    /**
     * Sets the msdyn_estimatediscountpercent property value. 
     * @param value Value to set for the msdyn_estimatediscountpercent property.
     */
    public set msdyn_estimatediscountpercent(value: number | undefined) {
        this._msdyn_estimatediscountpercent = value;
    };
    /**
     * Gets the msdyn_estimateduration property value. 
     * @returns a integer
     */
    public get msdyn_estimateduration() {
        return this._msdyn_estimateduration;
    };
    /**
     * Sets the msdyn_estimateduration property value. 
     * @param value Value to set for the msdyn_estimateduration property.
     */
    public set msdyn_estimateduration(value: number | undefined) {
        this._msdyn_estimateduration = value;
    };
    /**
     * Gets the msdyn_estimatesubtotal property value. 
     * @returns a int64
     */
    public get msdyn_estimatesubtotal() {
        return this._msdyn_estimatesubtotal;
    };
    /**
     * Sets the msdyn_estimatesubtotal property value. 
     * @param value Value to set for the msdyn_estimatesubtotal property.
     */
    public set msdyn_estimatesubtotal(value: number | undefined) {
        this._msdyn_estimatesubtotal = value;
    };
    /**
     * Gets the msdyn_estimatesubtotal_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatesubtotal_base() {
        return this._msdyn_estimatesubtotal_base;
    };
    /**
     * Sets the msdyn_estimatesubtotal_base property value. 
     * @param value Value to set for the msdyn_estimatesubtotal_base property.
     */
    public set msdyn_estimatesubtotal_base(value: number | undefined) {
        this._msdyn_estimatesubtotal_base = value;
    };
    /**
     * Gets the msdyn_estimatetotalamount property value. 
     * @returns a int64
     */
    public get msdyn_estimatetotalamount() {
        return this._msdyn_estimatetotalamount;
    };
    /**
     * Sets the msdyn_estimatetotalamount property value. 
     * @param value Value to set for the msdyn_estimatetotalamount property.
     */
    public set msdyn_estimatetotalamount(value: number | undefined) {
        this._msdyn_estimatetotalamount = value;
    };
    /**
     * Gets the msdyn_estimatetotalamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatetotalamount_base() {
        return this._msdyn_estimatetotalamount_base;
    };
    /**
     * Sets the msdyn_estimatetotalamount_base property value. 
     * @param value Value to set for the msdyn_estimatetotalamount_base property.
     */
    public set msdyn_estimatetotalamount_base(value: number | undefined) {
        this._msdyn_estimatetotalamount_base = value;
    };
    /**
     * Gets the msdyn_estimatetotalcost property value. 
     * @returns a int64
     */
    public get msdyn_estimatetotalcost() {
        return this._msdyn_estimatetotalcost;
    };
    /**
     * Sets the msdyn_estimatetotalcost property value. 
     * @param value Value to set for the msdyn_estimatetotalcost property.
     */
    public set msdyn_estimatetotalcost(value: number | undefined) {
        this._msdyn_estimatetotalcost = value;
    };
    /**
     * Gets the msdyn_estimatetotalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatetotalcost_base() {
        return this._msdyn_estimatetotalcost_base;
    };
    /**
     * Sets the msdyn_estimatetotalcost_base property value. 
     * @param value Value to set for the msdyn_estimatetotalcost_base property.
     */
    public set msdyn_estimatetotalcost_base(value: number | undefined) {
        this._msdyn_estimatetotalcost_base = value;
    };
    /**
     * Gets the msdyn_estimateunitamount property value. 
     * @returns a int64
     */
    public get msdyn_estimateunitamount() {
        return this._msdyn_estimateunitamount;
    };
    /**
     * Sets the msdyn_estimateunitamount property value. 
     * @param value Value to set for the msdyn_estimateunitamount property.
     */
    public set msdyn_estimateunitamount(value: number | undefined) {
        this._msdyn_estimateunitamount = value;
    };
    /**
     * Gets the msdyn_estimateunitamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estimateunitamount_base() {
        return this._msdyn_estimateunitamount_base;
    };
    /**
     * Sets the msdyn_estimateunitamount_base property value. 
     * @param value Value to set for the msdyn_estimateunitamount_base property.
     */
    public set msdyn_estimateunitamount_base(value: number | undefined) {
        this._msdyn_estimateunitamount_base = value;
    };
    /**
     * Gets the msdyn_estimateunitcost property value. 
     * @returns a int64
     */
    public get msdyn_estimateunitcost() {
        return this._msdyn_estimateunitcost;
    };
    /**
     * Sets the msdyn_estimateunitcost property value. 
     * @param value Value to set for the msdyn_estimateunitcost property.
     */
    public set msdyn_estimateunitcost(value: number | undefined) {
        this._msdyn_estimateunitcost = value;
    };
    /**
     * Gets the msdyn_estimateunitcost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimateunitcost_base() {
        return this._msdyn_estimateunitcost_base;
    };
    /**
     * Sets the msdyn_estimateunitcost_base property value. 
     * @param value Value to set for the msdyn_estimateunitcost_base property.
     */
    public set msdyn_estimateunitcost_base(value: number | undefined) {
        this._msdyn_estimateunitcost_base = value;
    };
    /**
     * Gets the msdyn_internaldescription property value. 
     * @returns a string
     */
    public get msdyn_internaldescription() {
        return this._msdyn_internaldescription;
    };
    /**
     * Sets the msdyn_internaldescription property value. 
     * @param value Value to set for the msdyn_internaldescription property.
     */
    public set msdyn_internaldescription(value: string | undefined) {
        this._msdyn_internaldescription = value;
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
     * Gets the msdyn_lineorder property value. 
     * @returns a integer
     */
    public get msdyn_lineorder() {
        return this._msdyn_lineorder;
    };
    /**
     * Sets the msdyn_lineorder property value. 
     * @param value Value to set for the msdyn_lineorder property.
     */
    public set msdyn_lineorder(value: number | undefined) {
        this._msdyn_lineorder = value;
    };
    /**
     * Gets the msdyn_linestatus property value. 
     * @returns a integer
     */
    public get msdyn_linestatus() {
        return this._msdyn_linestatus;
    };
    /**
     * Sets the msdyn_linestatus property value. 
     * @param value Value to set for the msdyn_linestatus property.
     */
    public set msdyn_linestatus(value: number | undefined) {
        this._msdyn_linestatus = value;
    };
    /**
     * Gets the msdyn_minimumchargeamount property value. 
     * @returns a int64
     */
    public get msdyn_minimumchargeamount() {
        return this._msdyn_minimumchargeamount;
    };
    /**
     * Sets the msdyn_minimumchargeamount property value. 
     * @param value Value to set for the msdyn_minimumchargeamount property.
     */
    public set msdyn_minimumchargeamount(value: number | undefined) {
        this._msdyn_minimumchargeamount = value;
    };
    /**
     * Gets the msdyn_minimumchargeamount_base property value. 
     * @returns a int64
     */
    public get msdyn_minimumchargeamount_base() {
        return this._msdyn_minimumchargeamount_base;
    };
    /**
     * Sets the msdyn_minimumchargeamount_base property value. 
     * @param value Value to set for the msdyn_minimumchargeamount_base property.
     */
    public set msdyn_minimumchargeamount_base(value: number | undefined) {
        this._msdyn_minimumchargeamount_base = value;
    };
    /**
     * Gets the msdyn_minimumchargeduration property value. 
     * @returns a integer
     */
    public get msdyn_minimumchargeduration() {
        return this._msdyn_minimumchargeduration;
    };
    /**
     * Sets the msdyn_minimumchargeduration property value. 
     * @param value Value to set for the msdyn_minimumchargeduration property.
     */
    public set msdyn_minimumchargeduration(value: number | undefined) {
        this._msdyn_minimumchargeduration = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderservice_invoicedetail property value. 
     * @returns a invoicedetail
     */
    public get msdyn_msdyn_workorderservice_invoicedetail() {
        return this._msdyn_msdyn_workorderservice_invoicedetail;
    };
    /**
     * Sets the msdyn_msdyn_workorderservice_invoicedetail property value. 
     * @param value Value to set for the msdyn_msdyn_workorderservice_invoicedetail property.
     */
    public set msdyn_msdyn_workorderservice_invoicedetail(value: Invoicedetail[] | undefined) {
        this._msdyn_msdyn_workorderservice_invoicedetail = value;
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
     * Gets the msdyn_service property value. 
     * @returns a product
     */
    public get msdyn_service() {
        return this._msdyn_service;
    };
    /**
     * Sets the msdyn_service property value. 
     * @param value Value to set for the msdyn_service property.
     */
    public set msdyn_service(value: Product | undefined) {
        this._msdyn_service = value;
    };
    /**
     * Gets the msdyn_subtotal property value. 
     * @returns a int64
     */
    public get msdyn_subtotal() {
        return this._msdyn_subtotal;
    };
    /**
     * Sets the msdyn_subtotal property value. 
     * @param value Value to set for the msdyn_subtotal property.
     */
    public set msdyn_subtotal(value: number | undefined) {
        this._msdyn_subtotal = value;
    };
    /**
     * Gets the msdyn_subtotal_base property value. 
     * @returns a int64
     */
    public get msdyn_subtotal_base() {
        return this._msdyn_subtotal_base;
    };
    /**
     * Sets the msdyn_subtotal_base property value. 
     * @param value Value to set for the msdyn_subtotal_base property.
     */
    public set msdyn_subtotal_base(value: number | undefined) {
        this._msdyn_subtotal_base = value;
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
     * Gets the msdyn_totalcost property value. 
     * @returns a int64
     */
    public get msdyn_totalcost() {
        return this._msdyn_totalcost;
    };
    /**
     * Sets the msdyn_totalcost property value. 
     * @param value Value to set for the msdyn_totalcost property.
     */
    public set msdyn_totalcost(value: number | undefined) {
        this._msdyn_totalcost = value;
    };
    /**
     * Gets the msdyn_totalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_totalcost_base() {
        return this._msdyn_totalcost_base;
    };
    /**
     * Sets the msdyn_totalcost_base property value. 
     * @param value Value to set for the msdyn_totalcost_base property.
     */
    public set msdyn_totalcost_base(value: number | undefined) {
        this._msdyn_totalcost_base = value;
    };
    /**
     * Gets the msdyn_unit property value. 
     * @returns a uom
     */
    public get msdyn_unit() {
        return this._msdyn_unit;
    };
    /**
     * Sets the msdyn_unit property value. 
     * @param value Value to set for the msdyn_unit property.
     */
    public set msdyn_unit(value: Uom | undefined) {
        this._msdyn_unit = value;
    };
    /**
     * Gets the msdyn_unitamount property value. 
     * @returns a int64
     */
    public get msdyn_unitamount() {
        return this._msdyn_unitamount;
    };
    /**
     * Sets the msdyn_unitamount property value. 
     * @param value Value to set for the msdyn_unitamount property.
     */
    public set msdyn_unitamount(value: number | undefined) {
        this._msdyn_unitamount = value;
    };
    /**
     * Gets the msdyn_unitamount_base property value. 
     * @returns a int64
     */
    public get msdyn_unitamount_base() {
        return this._msdyn_unitamount_base;
    };
    /**
     * Sets the msdyn_unitamount_base property value. 
     * @param value Value to set for the msdyn_unitamount_base property.
     */
    public set msdyn_unitamount_base(value: number | undefined) {
        this._msdyn_unitamount_base = value;
    };
    /**
     * Gets the msdyn_unitcost property value. 
     * @returns a int64
     */
    public get msdyn_unitcost() {
        return this._msdyn_unitcost;
    };
    /**
     * Sets the msdyn_unitcost property value. 
     * @param value Value to set for the msdyn_unitcost property.
     */
    public set msdyn_unitcost(value: number | undefined) {
        this._msdyn_unitcost = value;
    };
    /**
     * Gets the msdyn_unitcost_base property value. 
     * @returns a int64
     */
    public get msdyn_unitcost_base() {
        return this._msdyn_unitcost_base;
    };
    /**
     * Sets the msdyn_unitcost_base property value. 
     * @param value Value to set for the msdyn_unitcost_base property.
     */
    public set msdyn_unitcost_base(value: number | undefined) {
        this._msdyn_unitcost_base = value;
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
     * Gets the msdyn_workorderincident property value. 
     * @returns a msdyn_workorderincident
     */
    public get msdyn_workorderincident() {
        return this._msdyn_workorderincident;
    };
    /**
     * Sets the msdyn_workorderincident property value. 
     * @param value Value to set for the msdyn_workorderincident property.
     */
    public set msdyn_workorderincident(value: Msdyn_workorderincident | undefined) {
        this._msdyn_workorderincident = value;
    };
    /**
     * Gets the msdyn_workorderservice_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_workorderservice_ActivityPointers() {
        return this._msdyn_workorderservice_ActivityPointers;
    };
    /**
     * Sets the msdyn_workorderservice_ActivityPointers property value. 
     * @param value Value to set for the msdyn_workorderservice_ActivityPointers property.
     */
    public set msdyn_workorderservice_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_workorderservice_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_workorderservice_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_workorderservice_Annotations() {
        return this._msdyn_workorderservice_Annotations;
    };
    /**
     * Sets the msdyn_workorderservice_Annotations property value. 
     * @param value Value to set for the msdyn_workorderservice_Annotations property.
     */
    public set msdyn_workorderservice_Annotations(value: Annotation[] | undefined) {
        this._msdyn_workorderservice_Annotations = value;
    };
    /**
     * Gets the msdyn_workorderservice_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_workorderservice_Appointments() {
        return this._msdyn_workorderservice_Appointments;
    };
    /**
     * Sets the msdyn_workorderservice_Appointments property value. 
     * @param value Value to set for the msdyn_workorderservice_Appointments property.
     */
    public set msdyn_workorderservice_Appointments(value: Appointment[] | undefined) {
        this._msdyn_workorderservice_Appointments = value;
    };
    /**
     * Gets the msdyn_workorderservice_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_workorderservice_AsyncOperations() {
        return this._msdyn_workorderservice_AsyncOperations;
    };
    /**
     * Sets the msdyn_workorderservice_AsyncOperations property value. 
     * @param value Value to set for the msdyn_workorderservice_AsyncOperations property.
     */
    public set msdyn_workorderservice_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_workorderservice_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_workorderservice_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_workorderservice_BulkDeleteFailures() {
        return this._msdyn_workorderservice_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_workorderservice_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_workorderservice_BulkDeleteFailures property.
     */
    public set msdyn_workorderservice_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_workorderservice_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_workorderservice_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_workorderservice_connections1() {
        return this._msdyn_workorderservice_connections1;
    };
    /**
     * Sets the msdyn_workorderservice_connections1 property value. 
     * @param value Value to set for the msdyn_workorderservice_connections1 property.
     */
    public set msdyn_workorderservice_connections1(value: Connection[] | undefined) {
        this._msdyn_workorderservice_connections1 = value;
    };
    /**
     * Gets the msdyn_workorderservice_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_workorderservice_connections2() {
        return this._msdyn_workorderservice_connections2;
    };
    /**
     * Sets the msdyn_workorderservice_connections2 property value. 
     * @param value Value to set for the msdyn_workorderservice_connections2 property.
     */
    public set msdyn_workorderservice_connections2(value: Connection[] | undefined) {
        this._msdyn_workorderservice_connections2 = value;
    };
    /**
     * Gets the msdyn_workorderservice_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderservice_DuplicateBaseRecord() {
        return this._msdyn_workorderservice_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_workorderservice_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_workorderservice_DuplicateBaseRecord property.
     */
    public set msdyn_workorderservice_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderservice_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_workorderservice_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderservice_DuplicateMatchingRecord() {
        return this._msdyn_workorderservice_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_workorderservice_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_workorderservice_DuplicateMatchingRecord property.
     */
    public set msdyn_workorderservice_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderservice_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_workorderservice_Emails property value. 
     * @returns a email
     */
    public get msdyn_workorderservice_Emails() {
        return this._msdyn_workorderservice_Emails;
    };
    /**
     * Sets the msdyn_workorderservice_Emails property value. 
     * @param value Value to set for the msdyn_workorderservice_Emails property.
     */
    public set msdyn_workorderservice_Emails(value: Email[] | undefined) {
        this._msdyn_workorderservice_Emails = value;
    };
    /**
     * Gets the msdyn_workorderservice_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_workorderservice_Faxes() {
        return this._msdyn_workorderservice_Faxes;
    };
    /**
     * Sets the msdyn_workorderservice_Faxes property value. 
     * @param value Value to set for the msdyn_workorderservice_Faxes property.
     */
    public set msdyn_workorderservice_Faxes(value: Fax[] | undefined) {
        this._msdyn_workorderservice_Faxes = value;
    };
    /**
     * Gets the msdyn_workorderservice_Letters property value. 
     * @returns a letter
     */
    public get msdyn_workorderservice_Letters() {
        return this._msdyn_workorderservice_Letters;
    };
    /**
     * Sets the msdyn_workorderservice_Letters property value. 
     * @param value Value to set for the msdyn_workorderservice_Letters property.
     */
    public set msdyn_workorderservice_Letters(value: Letter[] | undefined) {
        this._msdyn_workorderservice_Letters = value;
    };
    /**
     * Gets the msdyn_workorderservice_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_workorderservice_MailboxTrackingFolders() {
        return this._msdyn_workorderservice_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_workorderservice_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_workorderservice_MailboxTrackingFolders property.
     */
    public set msdyn_workorderservice_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_workorderservice_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_workorderservice_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_workorderservice_msdyn_approvals() {
        return this._msdyn_workorderservice_msdyn_approvals;
    };
    /**
     * Sets the msdyn_workorderservice_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_workorderservice_msdyn_approvals property.
     */
    public set msdyn_workorderservice_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_workorderservice_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_workorderservice_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_workorderservice_msdyn_bookingalerts() {
        return this._msdyn_workorderservice_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_workorderservice_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_workorderservice_msdyn_bookingalerts property.
     */
    public set msdyn_workorderservice_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_workorderservice_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_workorderservice_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_workorderservice_msdyn_ocliveworkitems() {
        return this._msdyn_workorderservice_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_workorderservice_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_workorderservice_msdyn_ocliveworkitems property.
     */
    public set msdyn_workorderservice_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_workorderservice_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_workorderservice_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_workorderservice_msdyn_ocoutboundmessages() {
        return this._msdyn_workorderservice_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_workorderservice_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_workorderservice_msdyn_ocoutboundmessages property.
     */
    public set msdyn_workorderservice_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_workorderservice_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_workorderservice_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_workorderservice_msdyn_ocsessions() {
        return this._msdyn_workorderservice_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_workorderservice_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_workorderservice_msdyn_ocsessions property.
     */
    public set msdyn_workorderservice_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_workorderservice_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_workorderservice_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_workorderservice_msfp_alerts() {
        return this._msdyn_workorderservice_msfp_alerts;
    };
    /**
     * Sets the msdyn_workorderservice_msfp_alerts property value. 
     * @param value Value to set for the msdyn_workorderservice_msfp_alerts property.
     */
    public set msdyn_workorderservice_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_workorderservice_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_workorderservice_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_workorderservice_msfp_surveyinvites() {
        return this._msdyn_workorderservice_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_workorderservice_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_workorderservice_msfp_surveyinvites property.
     */
    public set msdyn_workorderservice_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_workorderservice_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_workorderservice_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_workorderservice_msfp_surveyresponses() {
        return this._msdyn_workorderservice_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_workorderservice_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_workorderservice_msfp_surveyresponses property.
     */
    public set msdyn_workorderservice_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_workorderservice_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_workorderservice_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_workorderservice_PhoneCalls() {
        return this._msdyn_workorderservice_PhoneCalls;
    };
    /**
     * Sets the msdyn_workorderservice_PhoneCalls property value. 
     * @param value Value to set for the msdyn_workorderservice_PhoneCalls property.
     */
    public set msdyn_workorderservice_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_workorderservice_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_workorderservice_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_workorderservice_PrincipalObjectAttributeAccesses() {
        return this._msdyn_workorderservice_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_workorderservice_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_workorderservice_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_workorderservice_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_workorderservice_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_workorderservice_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_workorderservice_ProcessSession() {
        return this._msdyn_workorderservice_ProcessSession;
    };
    /**
     * Sets the msdyn_workorderservice_ProcessSession property value. 
     * @param value Value to set for the msdyn_workorderservice_ProcessSession property.
     */
    public set msdyn_workorderservice_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_workorderservice_ProcessSession = value;
    };
    /**
     * Gets the msdyn_workorderservice_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_workorderservice_QueueItems() {
        return this._msdyn_workorderservice_QueueItems;
    };
    /**
     * Sets the msdyn_workorderservice_QueueItems property value. 
     * @param value Value to set for the msdyn_workorderservice_QueueItems property.
     */
    public set msdyn_workorderservice_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_workorderservice_QueueItems = value;
    };
    /**
     * Gets the msdyn_workorderservice_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_workorderservice_RecurringAppointmentMasters() {
        return this._msdyn_workorderservice_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_workorderservice_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_workorderservice_RecurringAppointmentMasters property.
     */
    public set msdyn_workorderservice_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_workorderservice_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_workorderservice_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_workorderservice_ServiceAppointments() {
        return this._msdyn_workorderservice_ServiceAppointments;
    };
    /**
     * Sets the msdyn_workorderservice_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_workorderservice_ServiceAppointments property.
     */
    public set msdyn_workorderservice_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_workorderservice_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_workorderservice_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_workorderservice_SharePointDocumentLocations() {
        return this._msdyn_workorderservice_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_workorderservice_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_workorderservice_SharePointDocumentLocations property.
     */
    public set msdyn_workorderservice_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_workorderservice_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_workorderservice_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_workorderservice_SocialActivities() {
        return this._msdyn_workorderservice_SocialActivities;
    };
    /**
     * Sets the msdyn_workorderservice_SocialActivities property value. 
     * @param value Value to set for the msdyn_workorderservice_SocialActivities property.
     */
    public set msdyn_workorderservice_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_workorderservice_SocialActivities = value;
    };
    /**
     * Gets the msdyn_workorderservice_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_workorderservice_SyncErrors() {
        return this._msdyn_workorderservice_SyncErrors;
    };
    /**
     * Sets the msdyn_workorderservice_SyncErrors property value. 
     * @param value Value to set for the msdyn_workorderservice_SyncErrors property.
     */
    public set msdyn_workorderservice_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_workorderservice_SyncErrors = value;
    };
    /**
     * Gets the msdyn_workorderservice_Tasks property value. 
     * @returns a task
     */
    public get msdyn_workorderservice_Tasks() {
        return this._msdyn_workorderservice_Tasks;
    };
    /**
     * Sets the msdyn_workorderservice_Tasks property value. 
     * @param value Value to set for the msdyn_workorderservice_Tasks property.
     */
    public set msdyn_workorderservice_Tasks(value: Task[] | undefined) {
        this._msdyn_workorderservice_Tasks = value;
    };
    /**
     * Gets the msdyn_workorderserviceid property value. 
     * @returns a string
     */
    public get msdyn_workorderserviceid() {
        return this._msdyn_workorderserviceid;
    };
    /**
     * Sets the msdyn_workorderserviceid property value. 
     * @param value Value to set for the msdyn_workorderserviceid property.
     */
    public set msdyn_workorderserviceid(value: string | undefined) {
        this._msdyn_workorderserviceid = value;
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
        writer.writeStringValue("_msdyn_agreementbookingservice_value", this._msdyn_agreementbookingservice_value);
        writer.writeStringValue("_msdyn_booking_value", this._msdyn_booking_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_entitlement_value", this._msdyn_entitlement_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_service_value", this._msdyn_service_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_msdyn_workorderincident_value", this._msdyn_workorderincident_value);
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
        writer.writeNumberValue("msdyn_additionalcost", this.msdyn_additionalcost);
        writer.writeNumberValue("msdyn_additionalcost_base", this.msdyn_additionalcost_base);
        writer.writeObjectValue<Msdyn_agreementbookingservice>("msdyn_agreementbookingservice", this.msdyn_agreementbookingservice);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_booking", this.msdyn_booking);
        writer.writeNumberValue("msdyn_calculatedunitamount", this.msdyn_calculatedunitamount);
        writer.writeNumberValue("msdyn_calculatedunitamount_base", this.msdyn_calculatedunitamount_base);
        writer.writeNumberValue("msdyn_commissioncosts", this.msdyn_commissioncosts);
        writer.writeNumberValue("msdyn_commissioncosts_base", this.msdyn_commissioncosts_base);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeBooleanValue("msdyn_disableentitlement", this.msdyn_disableentitlement);
        writer.writeNumberValue("msdyn_discountamount", this.msdyn_discountamount);
        writer.writeNumberValue("msdyn_discountamount_base", this.msdyn_discountamount_base);
        writer.writeNumberValue("msdyn_discountpercent", this.msdyn_discountpercent);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeNumberValue("msdyn_durationtobill", this.msdyn_durationtobill);
        writer.writeObjectValue<Entitlement>("msdyn_entitlement", this.msdyn_entitlement);
        writer.writeNumberValue("msdyn_estimatecalculatedunitamount", this.msdyn_estimatecalculatedunitamount);
        writer.writeNumberValue("msdyn_estimatecalculatedunitamount_base", this.msdyn_estimatecalculatedunitamount_base);
        writer.writeNumberValue("msdyn_estimatediscountamount", this.msdyn_estimatediscountamount);
        writer.writeNumberValue("msdyn_estimatediscountamount_base", this.msdyn_estimatediscountamount_base);
        writer.writeNumberValue("msdyn_estimatediscountpercent", this.msdyn_estimatediscountpercent);
        writer.writeNumberValue("msdyn_estimateduration", this.msdyn_estimateduration);
        writer.writeNumberValue("msdyn_estimatesubtotal", this.msdyn_estimatesubtotal);
        writer.writeNumberValue("msdyn_estimatesubtotal_base", this.msdyn_estimatesubtotal_base);
        writer.writeNumberValue("msdyn_estimatetotalamount", this.msdyn_estimatetotalamount);
        writer.writeNumberValue("msdyn_estimatetotalamount_base", this.msdyn_estimatetotalamount_base);
        writer.writeNumberValue("msdyn_estimatetotalcost", this.msdyn_estimatetotalcost);
        writer.writeNumberValue("msdyn_estimatetotalcost_base", this.msdyn_estimatetotalcost_base);
        writer.writeNumberValue("msdyn_estimateunitamount", this.msdyn_estimateunitamount);
        writer.writeNumberValue("msdyn_estimateunitamount_base", this.msdyn_estimateunitamount_base);
        writer.writeNumberValue("msdyn_estimateunitcost", this.msdyn_estimateunitcost);
        writer.writeNumberValue("msdyn_estimateunitcost_base", this.msdyn_estimateunitcost_base);
        writer.writeStringValue("msdyn_internaldescription", this.msdyn_internaldescription);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeNumberValue("msdyn_linestatus", this.msdyn_linestatus);
        writer.writeNumberValue("msdyn_minimumchargeamount", this.msdyn_minimumchargeamount);
        writer.writeNumberValue("msdyn_minimumchargeamount_base", this.msdyn_minimumchargeamount_base);
        writer.writeNumberValue("msdyn_minimumchargeduration", this.msdyn_minimumchargeduration);
        writer.writeCollectionOfObjectValues<Invoicedetail>("msdyn_msdyn_workorderservice_invoicedetail", this.msdyn_msdyn_workorderservice_invoicedetail);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeObjectValue<Product>("msdyn_service", this.msdyn_service);
        writer.writeNumberValue("msdyn_subtotal", this.msdyn_subtotal);
        writer.writeNumberValue("msdyn_subtotal_base", this.msdyn_subtotal_base);
        writer.writeBooleanValue("msdyn_taxable", this.msdyn_taxable);
        writer.writeNumberValue("msdyn_totalamount", this.msdyn_totalamount);
        writer.writeNumberValue("msdyn_totalamount_base", this.msdyn_totalamount_base);
        writer.writeNumberValue("msdyn_totalcost", this.msdyn_totalcost);
        writer.writeNumberValue("msdyn_totalcost_base", this.msdyn_totalcost_base);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeNumberValue("msdyn_unitamount", this.msdyn_unitamount);
        writer.writeNumberValue("msdyn_unitamount_base", this.msdyn_unitamount_base);
        writer.writeNumberValue("msdyn_unitcost", this.msdyn_unitcost);
        writer.writeNumberValue("msdyn_unitcost_base", this.msdyn_unitcost_base);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorder", this.msdyn_workorder);
        writer.writeObjectValue<Msdyn_workorderincident>("msdyn_workorderincident", this.msdyn_workorderincident);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_workorderservice_ActivityPointers", this.msdyn_workorderservice_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_workorderservice_Annotations", this.msdyn_workorderservice_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_workorderservice_Appointments", this.msdyn_workorderservice_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_workorderservice_AsyncOperations", this.msdyn_workorderservice_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_workorderservice_BulkDeleteFailures", this.msdyn_workorderservice_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_workorderservice_connections1", this.msdyn_workorderservice_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_workorderservice_connections2", this.msdyn_workorderservice_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderservice_DuplicateBaseRecord", this.msdyn_workorderservice_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderservice_DuplicateMatchingRecord", this.msdyn_workorderservice_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_workorderservice_Emails", this.msdyn_workorderservice_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_workorderservice_Faxes", this.msdyn_workorderservice_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_workorderservice_Letters", this.msdyn_workorderservice_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_workorderservice_MailboxTrackingFolders", this.msdyn_workorderservice_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_workorderservice_msdyn_approvals", this.msdyn_workorderservice_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_workorderservice_msdyn_bookingalerts", this.msdyn_workorderservice_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_workorderservice_msdyn_ocliveworkitems", this.msdyn_workorderservice_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_workorderservice_msdyn_ocoutboundmessages", this.msdyn_workorderservice_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_workorderservice_msdyn_ocsessions", this.msdyn_workorderservice_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_workorderservice_msfp_alerts", this.msdyn_workorderservice_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_workorderservice_msfp_surveyinvites", this.msdyn_workorderservice_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_workorderservice_msfp_surveyresponses", this.msdyn_workorderservice_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_workorderservice_PhoneCalls", this.msdyn_workorderservice_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_workorderservice_PrincipalObjectAttributeAccesses", this.msdyn_workorderservice_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_workorderservice_ProcessSession", this.msdyn_workorderservice_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_workorderservice_QueueItems", this.msdyn_workorderservice_QueueItems);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_workorderservice_RecurringAppointmentMasters", this.msdyn_workorderservice_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_workorderservice_ServiceAppointments", this.msdyn_workorderservice_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_workorderservice_SharePointDocumentLocations", this.msdyn_workorderservice_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_workorderservice_SocialActivities", this.msdyn_workorderservice_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_workorderservice_SyncErrors", this.msdyn_workorderservice_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_workorderservice_Tasks", this.msdyn_workorderservice_Tasks);
        writer.writeStringValue("msdyn_workorderserviceid", this.msdyn_workorderserviceid);
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
