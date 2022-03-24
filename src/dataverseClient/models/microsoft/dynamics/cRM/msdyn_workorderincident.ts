import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingincidentFromDiscriminatorValue} from './createMsdyn_agreementbookingincidentFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_functionallocationFromDiscriminatorValue} from './createMsdyn_functionallocationFromDiscriminatorValue';
import {createMsdyn_incidenttypeFromDiscriminatorValue} from './createMsdyn_incidenttypeFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_requirementcharacteristicFromDiscriminatorValue} from './createMsdyn_requirementcharacteristicFromDiscriminatorValue';
import {createMsdyn_resolutionFromDiscriminatorValue} from './createMsdyn_resolutionFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsdyn_workordercharacteristicFromDiscriminatorValue} from './createMsdyn_workordercharacteristicFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsdyn_workorderresolutionFromDiscriminatorValue} from './createMsdyn_workorderresolutionFromDiscriminatorValue';
import {createMsdyn_workorderserviceFromDiscriminatorValue} from './createMsdyn_workorderserviceFromDiscriminatorValue';
import {createMsdyn_workorderservicetaskFromDiscriminatorValue} from './createMsdyn_workorderservicetaskFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreementbookingincident, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_functionallocation, Msdyn_incidenttype, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_requirementcharacteristic, Msdyn_resolution, Msdyn_resourcerequirement, Msdyn_workorder, Msdyn_workordercharacteristic, Msdyn_workorderproduct, Msdyn_workorderresolution, Msdyn_workorderservice, Msdyn_workorderservicetask, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Queueitem, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_workorderincident extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreementbookingincident_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_functionallocation_value?: string | undefined;
    private __msdyn_incidenttype_value?: string | undefined;
    private __msdyn_primaryresolution_value?: string | undefined;
    private __msdyn_resourcerequirement_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_agreementbookingincident?: Msdyn_agreementbookingincident | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_FunctionalLocation?: Msdyn_functionallocation | undefined;
    private _msdyn_incidentresolved?: boolean | undefined;
    private _msdyn_incidenttype?: Msdyn_incidenttype | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_ismobile?: boolean | undefined;
    private _msdyn_isprimary?: boolean | undefined;
    private _msdyn_itemspopulated?: boolean | undefined;
    private _msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident?: Msdyn_requirementcharacteristic[] | undefined;
    private _msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident?: Msdyn_workordercharacteristic[] | undefined;
    private _msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident?: Msdyn_workorderproduct[] | undefined;
    private _msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident?: Msdyn_workorderresolution[] | undefined;
    private _msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident?: Msdyn_workorderservice[] | undefined;
    private _msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident?: Msdyn_workorderservicetask[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_PrimaryResolution?: Msdyn_resolution | undefined;
    private _msdyn_ResourceRequirement?: Msdyn_resourcerequirement | undefined;
    private _msdyn_taskspercentcompleted?: number | undefined;
    private _msdyn_workorder?: Msdyn_workorder | undefined;
    private _msdyn_workorderincident_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_workorderincident_Annotations?: Annotation[] | undefined;
    private _msdyn_workorderincident_Appointments?: Appointment[] | undefined;
    private _msdyn_workorderincident_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_workorderincident_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_workorderincident_connections1?: Connection[] | undefined;
    private _msdyn_workorderincident_connections2?: Connection[] | undefined;
    private _msdyn_workorderincident_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderincident_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderincident_Emails?: Email[] | undefined;
    private _msdyn_workorderincident_Faxes?: Fax[] | undefined;
    private _msdyn_workorderincident_Letters?: Letter[] | undefined;
    private _msdyn_workorderincident_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_workorderincident_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_workorderincident_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_workorderincident_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_workorderincident_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_workorderincident_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_workorderincident_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_workorderincident_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_workorderincident_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_workorderincident_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_workorderincident_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_workorderincident_ProcessSession?: Processsession[] | undefined;
    private _msdyn_workorderincident_QueueItems?: Queueitem[] | undefined;
    private _msdyn_workorderincident_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_workorderincident_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_workorderincident_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_workorderincident_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_workorderincident_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_workorderincident_Tasks?: Task[] | undefined;
    private _msdyn_workorderincidentid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
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
     * Gets the _msdyn_agreementbookingincident_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingincident_value() {
        return this.__msdyn_agreementbookingincident_value;
    };
    /**
     * Sets the _msdyn_agreementbookingincident_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingincident_value property.
     */
    public set _msdyn_agreementbookingincident_value(value: string | undefined) {
        this.__msdyn_agreementbookingincident_value = value;
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
     * Gets the _msdyn_functionallocation_value property value. 
     * @returns a string
     */
    public get _msdyn_functionallocation_value() {
        return this.__msdyn_functionallocation_value;
    };
    /**
     * Sets the _msdyn_functionallocation_value property value. 
     * @param value Value to set for the _msdyn_functionallocation_value property.
     */
    public set _msdyn_functionallocation_value(value: string | undefined) {
        this.__msdyn_functionallocation_value = value;
    };
    /**
     * Gets the _msdyn_incidenttype_value property value. 
     * @returns a string
     */
    public get _msdyn_incidenttype_value() {
        return this.__msdyn_incidenttype_value;
    };
    /**
     * Sets the _msdyn_incidenttype_value property value. 
     * @param value Value to set for the _msdyn_incidenttype_value property.
     */
    public set _msdyn_incidenttype_value(value: string | undefined) {
        this.__msdyn_incidenttype_value = value;
    };
    /**
     * Gets the _msdyn_primaryresolution_value property value. 
     * @returns a string
     */
    public get _msdyn_primaryresolution_value() {
        return this.__msdyn_primaryresolution_value;
    };
    /**
     * Sets the _msdyn_primaryresolution_value property value. 
     * @param value Value to set for the _msdyn_primaryresolution_value property.
     */
    public set _msdyn_primaryresolution_value(value: string | undefined) {
        this.__msdyn_primaryresolution_value = value;
    };
    /**
     * Gets the _msdyn_resourcerequirement_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcerequirement_value() {
        return this.__msdyn_resourcerequirement_value;
    };
    /**
     * Sets the _msdyn_resourcerequirement_value property value. 
     * @param value Value to set for the _msdyn_resourcerequirement_value property.
     */
    public set _msdyn_resourcerequirement_value(value: string | undefined) {
        this.__msdyn_resourcerequirement_value = value;
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
     * Instantiates a new msdyn_workorderincident and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreementbookingincident_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_agreementbookingincident_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_functionallocation_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_functionallocation_value = n.getStringValue(); },
            "_msdyn_incidenttype_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_incidenttype_value = n.getStringValue(); },
            "_msdyn_primaryresolution_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_primaryresolution_value = n.getStringValue(); },
            "_msdyn_resourcerequirement_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_resourcerequirement_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_workorderincident)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_workorderincident).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_workorderincident).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderincident).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_workorderincident).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_workorderincident).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_workorderincident).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderincident).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreementbookingincident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_agreementbookingincident = n.getObjectValue<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_FunctionalLocation": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_FunctionalLocation = n.getObjectValue<Msdyn_functionallocation>(createMsdyn_functionallocationFromDiscriminatorValue); },
            "msdyn_incidentresolved": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_incidentresolved = n.getBooleanValue(); },
            "msdyn_incidenttype": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_incidenttype = n.getObjectValue<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_internalflags = n.getStringValue(); },
            "msdyn_ismobile": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_ismobile = n.getBooleanValue(); },
            "msdyn_isprimary": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_isprimary = n.getBooleanValue(); },
            "msdyn_itemspopulated": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_itemspopulated = n.getBooleanValue(); },
            "msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident = n.getCollectionOfObjectValues<Msdyn_requirementcharacteristic>(createMsdyn_requirementcharacteristicFromDiscriminatorValue); },
            "msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident = n.getCollectionOfObjectValues<Msdyn_workordercharacteristic>(createMsdyn_workordercharacteristicFromDiscriminatorValue); },
            "msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident = n.getCollectionOfObjectValues<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident = n.getCollectionOfObjectValues<Msdyn_workorderresolution>(createMsdyn_workorderresolutionFromDiscriminatorValue); },
            "msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident = n.getCollectionOfObjectValues<Msdyn_workorderservice>(createMsdyn_workorderserviceFromDiscriminatorValue); },
            "msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident = n.getCollectionOfObjectValues<Msdyn_workorderservicetask>(createMsdyn_workorderservicetaskFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_name = n.getStringValue(); },
            "msdyn_PrimaryResolution": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_PrimaryResolution = n.getObjectValue<Msdyn_resolution>(createMsdyn_resolutionFromDiscriminatorValue); },
            "msdyn_ResourceRequirement": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_ResourceRequirement = n.getObjectValue<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_taskspercentcompleted": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_taskspercentcompleted = n.getNumberValue(); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_workorderincident_ActivityPointers": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_workorderincident_Annotations": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_workorderincident_Appointments": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_workorderincident_AsyncOperations": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_workorderincident_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_workorderincident_connections1": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_workorderincident_connections2": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_workorderincident_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderincident_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderincident_Emails": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_workorderincident_Faxes": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_workorderincident_Letters": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_workorderincident_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_workorderincident_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_workorderincident_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_workorderincident_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_workorderincident_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_workorderincident_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_workorderincident_msfp_alerts": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_workorderincident_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_workorderincident_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_workorderincident_PhoneCalls": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_workorderincident_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_workorderincident_ProcessSession": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_workorderincident_QueueItems": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_workorderincident_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_workorderincident_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_workorderincident_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_workorderincident_SocialActivities": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_workorderincident_SyncErrors": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_workorderincident_Tasks": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincident_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_workorderincidentid": (o, n) => { (o as unknown as Msdyn_workorderincident).msdyn_workorderincidentid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_workorderincident).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_workorderincident).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_workorderincident).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_workorderincident).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_workorderincident).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_workorderincident).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_workorderincident).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_workorderincident).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_workorderincident).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_workorderincident).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agreementbookingincident property value. 
     * @returns a msdyn_agreementbookingincident
     */
    public get msdyn_agreementbookingincident() {
        return this._msdyn_agreementbookingincident;
    };
    /**
     * Sets the msdyn_agreementbookingincident property value. 
     * @param value Value to set for the msdyn_agreementbookingincident property.
     */
    public set msdyn_agreementbookingincident(value: Msdyn_agreementbookingincident | undefined) {
        this._msdyn_agreementbookingincident = value;
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
     * Gets the msdyn_estimatedduration property value. 
     * @returns a integer
     */
    public get msdyn_estimatedduration() {
        return this._msdyn_estimatedduration;
    };
    /**
     * Sets the msdyn_estimatedduration property value. 
     * @param value Value to set for the msdyn_estimatedduration property.
     */
    public set msdyn_estimatedduration(value: number | undefined) {
        this._msdyn_estimatedduration = value;
    };
    /**
     * Gets the msdyn_FunctionalLocation property value. 
     * @returns a msdyn_functionallocation
     */
    public get msdyn_FunctionalLocation() {
        return this._msdyn_FunctionalLocation;
    };
    /**
     * Sets the msdyn_FunctionalLocation property value. 
     * @param value Value to set for the msdyn_FunctionalLocation property.
     */
    public set msdyn_FunctionalLocation(value: Msdyn_functionallocation | undefined) {
        this._msdyn_FunctionalLocation = value;
    };
    /**
     * Gets the msdyn_incidentresolved property value. 
     * @returns a boolean
     */
    public get msdyn_incidentresolved() {
        return this._msdyn_incidentresolved;
    };
    /**
     * Sets the msdyn_incidentresolved property value. 
     * @param value Value to set for the msdyn_incidentresolved property.
     */
    public set msdyn_incidentresolved(value: boolean | undefined) {
        this._msdyn_incidentresolved = value;
    };
    /**
     * Gets the msdyn_incidenttype property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_incidenttype() {
        return this._msdyn_incidenttype;
    };
    /**
     * Sets the msdyn_incidenttype property value. 
     * @param value Value to set for the msdyn_incidenttype property.
     */
    public set msdyn_incidenttype(value: Msdyn_incidenttype | undefined) {
        this._msdyn_incidenttype = value;
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
     * Gets the msdyn_ismobile property value. 
     * @returns a boolean
     */
    public get msdyn_ismobile() {
        return this._msdyn_ismobile;
    };
    /**
     * Sets the msdyn_ismobile property value. 
     * @param value Value to set for the msdyn_ismobile property.
     */
    public set msdyn_ismobile(value: boolean | undefined) {
        this._msdyn_ismobile = value;
    };
    /**
     * Gets the msdyn_isprimary property value. 
     * @returns a boolean
     */
    public get msdyn_isprimary() {
        return this._msdyn_isprimary;
    };
    /**
     * Sets the msdyn_isprimary property value. 
     * @param value Value to set for the msdyn_isprimary property.
     */
    public set msdyn_isprimary(value: boolean | undefined) {
        this._msdyn_isprimary = value;
    };
    /**
     * Gets the msdyn_itemspopulated property value. 
     * @returns a boolean
     */
    public get msdyn_itemspopulated() {
        return this._msdyn_itemspopulated;
    };
    /**
     * Sets the msdyn_itemspopulated property value. 
     * @param value Value to set for the msdyn_itemspopulated property.
     */
    public set msdyn_itemspopulated(value: boolean | undefined) {
        this._msdyn_itemspopulated = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident property value. 
     * @returns a msdyn_requirementcharacteristic
     */
    public get msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident() {
        return this._msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident;
    };
    /**
     * Sets the msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident property value. 
     * @param value Value to set for the msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident property.
     */
    public set msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident(value: Msdyn_requirementcharacteristic[] | undefined) {
        this._msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident property value. 
     * @returns a msdyn_workordercharacteristic
     */
    public get msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident() {
        return this._msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident;
    };
    /**
     * Sets the msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident property value. 
     * @param value Value to set for the msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident property.
     */
    public set msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident(value: Msdyn_workordercharacteristic[] | undefined) {
        this._msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident() {
        return this._msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident;
    };
    /**
     * Sets the msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident property value. 
     * @param value Value to set for the msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident property.
     */
    public set msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident(value: Msdyn_workorderproduct[] | undefined) {
        this._msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident property value. 
     * @returns a msdyn_workorderresolution
     */
    public get msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident() {
        return this._msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident;
    };
    /**
     * Sets the msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident property value. 
     * @param value Value to set for the msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident property.
     */
    public set msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident(value: Msdyn_workorderresolution[] | undefined) {
        this._msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident property value. 
     * @returns a msdyn_workorderservice
     */
    public get msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident() {
        return this._msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident;
    };
    /**
     * Sets the msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident property value. 
     * @param value Value to set for the msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident property.
     */
    public set msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident(value: Msdyn_workorderservice[] | undefined) {
        this._msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident = value;
    };
    /**
     * Gets the msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident property value. 
     * @returns a msdyn_workorderservicetask
     */
    public get msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident() {
        return this._msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident;
    };
    /**
     * Sets the msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident property value. 
     * @param value Value to set for the msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident property.
     */
    public set msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident(value: Msdyn_workorderservicetask[] | undefined) {
        this._msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident = value;
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
     * Gets the msdyn_PrimaryResolution property value. 
     * @returns a msdyn_resolution
     */
    public get msdyn_PrimaryResolution() {
        return this._msdyn_PrimaryResolution;
    };
    /**
     * Sets the msdyn_PrimaryResolution property value. 
     * @param value Value to set for the msdyn_PrimaryResolution property.
     */
    public set msdyn_PrimaryResolution(value: Msdyn_resolution | undefined) {
        this._msdyn_PrimaryResolution = value;
    };
    /**
     * Gets the msdyn_ResourceRequirement property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_ResourceRequirement() {
        return this._msdyn_ResourceRequirement;
    };
    /**
     * Sets the msdyn_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_ResourceRequirement property.
     */
    public set msdyn_ResourceRequirement(value: Msdyn_resourcerequirement | undefined) {
        this._msdyn_ResourceRequirement = value;
    };
    /**
     * Gets the msdyn_taskspercentcompleted property value. 
     * @returns a double
     */
    public get msdyn_taskspercentcompleted() {
        return this._msdyn_taskspercentcompleted;
    };
    /**
     * Sets the msdyn_taskspercentcompleted property value. 
     * @param value Value to set for the msdyn_taskspercentcompleted property.
     */
    public set msdyn_taskspercentcompleted(value: number | undefined) {
        this._msdyn_taskspercentcompleted = value;
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
     * Gets the msdyn_workorderincident_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_workorderincident_ActivityPointers() {
        return this._msdyn_workorderincident_ActivityPointers;
    };
    /**
     * Sets the msdyn_workorderincident_ActivityPointers property value. 
     * @param value Value to set for the msdyn_workorderincident_ActivityPointers property.
     */
    public set msdyn_workorderincident_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_workorderincident_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_workorderincident_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_workorderincident_Annotations() {
        return this._msdyn_workorderincident_Annotations;
    };
    /**
     * Sets the msdyn_workorderincident_Annotations property value. 
     * @param value Value to set for the msdyn_workorderincident_Annotations property.
     */
    public set msdyn_workorderincident_Annotations(value: Annotation[] | undefined) {
        this._msdyn_workorderincident_Annotations = value;
    };
    /**
     * Gets the msdyn_workorderincident_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_workorderincident_Appointments() {
        return this._msdyn_workorderincident_Appointments;
    };
    /**
     * Sets the msdyn_workorderincident_Appointments property value. 
     * @param value Value to set for the msdyn_workorderincident_Appointments property.
     */
    public set msdyn_workorderincident_Appointments(value: Appointment[] | undefined) {
        this._msdyn_workorderincident_Appointments = value;
    };
    /**
     * Gets the msdyn_workorderincident_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_workorderincident_AsyncOperations() {
        return this._msdyn_workorderincident_AsyncOperations;
    };
    /**
     * Sets the msdyn_workorderincident_AsyncOperations property value. 
     * @param value Value to set for the msdyn_workorderincident_AsyncOperations property.
     */
    public set msdyn_workorderincident_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_workorderincident_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_workorderincident_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_workorderincident_BulkDeleteFailures() {
        return this._msdyn_workorderincident_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_workorderincident_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_workorderincident_BulkDeleteFailures property.
     */
    public set msdyn_workorderincident_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_workorderincident_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_workorderincident_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_workorderincident_connections1() {
        return this._msdyn_workorderincident_connections1;
    };
    /**
     * Sets the msdyn_workorderincident_connections1 property value. 
     * @param value Value to set for the msdyn_workorderincident_connections1 property.
     */
    public set msdyn_workorderincident_connections1(value: Connection[] | undefined) {
        this._msdyn_workorderincident_connections1 = value;
    };
    /**
     * Gets the msdyn_workorderincident_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_workorderincident_connections2() {
        return this._msdyn_workorderincident_connections2;
    };
    /**
     * Sets the msdyn_workorderincident_connections2 property value. 
     * @param value Value to set for the msdyn_workorderincident_connections2 property.
     */
    public set msdyn_workorderincident_connections2(value: Connection[] | undefined) {
        this._msdyn_workorderincident_connections2 = value;
    };
    /**
     * Gets the msdyn_workorderincident_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderincident_DuplicateBaseRecord() {
        return this._msdyn_workorderincident_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_workorderincident_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_workorderincident_DuplicateBaseRecord property.
     */
    public set msdyn_workorderincident_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderincident_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_workorderincident_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderincident_DuplicateMatchingRecord() {
        return this._msdyn_workorderincident_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_workorderincident_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_workorderincident_DuplicateMatchingRecord property.
     */
    public set msdyn_workorderincident_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderincident_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_workorderincident_Emails property value. 
     * @returns a email
     */
    public get msdyn_workorderincident_Emails() {
        return this._msdyn_workorderincident_Emails;
    };
    /**
     * Sets the msdyn_workorderincident_Emails property value. 
     * @param value Value to set for the msdyn_workorderincident_Emails property.
     */
    public set msdyn_workorderincident_Emails(value: Email[] | undefined) {
        this._msdyn_workorderincident_Emails = value;
    };
    /**
     * Gets the msdyn_workorderincident_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_workorderincident_Faxes() {
        return this._msdyn_workorderincident_Faxes;
    };
    /**
     * Sets the msdyn_workorderincident_Faxes property value. 
     * @param value Value to set for the msdyn_workorderincident_Faxes property.
     */
    public set msdyn_workorderincident_Faxes(value: Fax[] | undefined) {
        this._msdyn_workorderincident_Faxes = value;
    };
    /**
     * Gets the msdyn_workorderincident_Letters property value. 
     * @returns a letter
     */
    public get msdyn_workorderincident_Letters() {
        return this._msdyn_workorderincident_Letters;
    };
    /**
     * Sets the msdyn_workorderincident_Letters property value. 
     * @param value Value to set for the msdyn_workorderincident_Letters property.
     */
    public set msdyn_workorderincident_Letters(value: Letter[] | undefined) {
        this._msdyn_workorderincident_Letters = value;
    };
    /**
     * Gets the msdyn_workorderincident_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_workorderincident_MailboxTrackingFolders() {
        return this._msdyn_workorderincident_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_workorderincident_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_workorderincident_MailboxTrackingFolders property.
     */
    public set msdyn_workorderincident_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_workorderincident_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_workorderincident_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_workorderincident_msdyn_approvals() {
        return this._msdyn_workorderincident_msdyn_approvals;
    };
    /**
     * Sets the msdyn_workorderincident_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_workorderincident_msdyn_approvals property.
     */
    public set msdyn_workorderincident_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_workorderincident_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_workorderincident_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_workorderincident_msdyn_bookingalerts() {
        return this._msdyn_workorderincident_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_workorderincident_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_workorderincident_msdyn_bookingalerts property.
     */
    public set msdyn_workorderincident_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_workorderincident_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_workorderincident_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_workorderincident_msdyn_ocliveworkitems() {
        return this._msdyn_workorderincident_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_workorderincident_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_workorderincident_msdyn_ocliveworkitems property.
     */
    public set msdyn_workorderincident_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_workorderincident_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_workorderincident_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_workorderincident_msdyn_ocoutboundmessages() {
        return this._msdyn_workorderincident_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_workorderincident_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_workorderincident_msdyn_ocoutboundmessages property.
     */
    public set msdyn_workorderincident_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_workorderincident_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_workorderincident_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_workorderincident_msdyn_ocsessions() {
        return this._msdyn_workorderincident_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_workorderincident_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_workorderincident_msdyn_ocsessions property.
     */
    public set msdyn_workorderincident_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_workorderincident_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_workorderincident_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_workorderincident_msfp_alerts() {
        return this._msdyn_workorderincident_msfp_alerts;
    };
    /**
     * Sets the msdyn_workorderincident_msfp_alerts property value. 
     * @param value Value to set for the msdyn_workorderincident_msfp_alerts property.
     */
    public set msdyn_workorderincident_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_workorderincident_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_workorderincident_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_workorderincident_msfp_surveyinvites() {
        return this._msdyn_workorderincident_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_workorderincident_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_workorderincident_msfp_surveyinvites property.
     */
    public set msdyn_workorderincident_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_workorderincident_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_workorderincident_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_workorderincident_msfp_surveyresponses() {
        return this._msdyn_workorderincident_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_workorderincident_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_workorderincident_msfp_surveyresponses property.
     */
    public set msdyn_workorderincident_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_workorderincident_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_workorderincident_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_workorderincident_PhoneCalls() {
        return this._msdyn_workorderincident_PhoneCalls;
    };
    /**
     * Sets the msdyn_workorderincident_PhoneCalls property value. 
     * @param value Value to set for the msdyn_workorderincident_PhoneCalls property.
     */
    public set msdyn_workorderincident_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_workorderincident_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_workorderincident_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_workorderincident_PrincipalObjectAttributeAccesses() {
        return this._msdyn_workorderincident_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_workorderincident_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_workorderincident_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_workorderincident_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_workorderincident_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_workorderincident_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_workorderincident_ProcessSession() {
        return this._msdyn_workorderincident_ProcessSession;
    };
    /**
     * Sets the msdyn_workorderincident_ProcessSession property value. 
     * @param value Value to set for the msdyn_workorderincident_ProcessSession property.
     */
    public set msdyn_workorderincident_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_workorderincident_ProcessSession = value;
    };
    /**
     * Gets the msdyn_workorderincident_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_workorderincident_QueueItems() {
        return this._msdyn_workorderincident_QueueItems;
    };
    /**
     * Sets the msdyn_workorderincident_QueueItems property value. 
     * @param value Value to set for the msdyn_workorderincident_QueueItems property.
     */
    public set msdyn_workorderincident_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_workorderincident_QueueItems = value;
    };
    /**
     * Gets the msdyn_workorderincident_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_workorderincident_RecurringAppointmentMasters() {
        return this._msdyn_workorderincident_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_workorderincident_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_workorderincident_RecurringAppointmentMasters property.
     */
    public set msdyn_workorderincident_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_workorderincident_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_workorderincident_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_workorderincident_ServiceAppointments() {
        return this._msdyn_workorderincident_ServiceAppointments;
    };
    /**
     * Sets the msdyn_workorderincident_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_workorderincident_ServiceAppointments property.
     */
    public set msdyn_workorderincident_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_workorderincident_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_workorderincident_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_workorderincident_SharePointDocumentLocations() {
        return this._msdyn_workorderincident_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_workorderincident_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_workorderincident_SharePointDocumentLocations property.
     */
    public set msdyn_workorderincident_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_workorderincident_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_workorderincident_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_workorderincident_SocialActivities() {
        return this._msdyn_workorderincident_SocialActivities;
    };
    /**
     * Sets the msdyn_workorderincident_SocialActivities property value. 
     * @param value Value to set for the msdyn_workorderincident_SocialActivities property.
     */
    public set msdyn_workorderincident_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_workorderincident_SocialActivities = value;
    };
    /**
     * Gets the msdyn_workorderincident_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_workorderincident_SyncErrors() {
        return this._msdyn_workorderincident_SyncErrors;
    };
    /**
     * Sets the msdyn_workorderincident_SyncErrors property value. 
     * @param value Value to set for the msdyn_workorderincident_SyncErrors property.
     */
    public set msdyn_workorderincident_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_workorderincident_SyncErrors = value;
    };
    /**
     * Gets the msdyn_workorderincident_Tasks property value. 
     * @returns a task
     */
    public get msdyn_workorderincident_Tasks() {
        return this._msdyn_workorderincident_Tasks;
    };
    /**
     * Sets the msdyn_workorderincident_Tasks property value. 
     * @param value Value to set for the msdyn_workorderincident_Tasks property.
     */
    public set msdyn_workorderincident_Tasks(value: Task[] | undefined) {
        this._msdyn_workorderincident_Tasks = value;
    };
    /**
     * Gets the msdyn_workorderincidentid property value. 
     * @returns a string
     */
    public get msdyn_workorderincidentid() {
        return this._msdyn_workorderincidentid;
    };
    /**
     * Sets the msdyn_workorderincidentid property value. 
     * @param value Value to set for the msdyn_workorderincidentid property.
     */
    public set msdyn_workorderincidentid(value: string | undefined) {
        this._msdyn_workorderincidentid = value;
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
        writer.writeStringValue("_msdyn_agreementbookingincident_value", this._msdyn_agreementbookingincident_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_functionallocation_value", this._msdyn_functionallocation_value);
        writer.writeStringValue("_msdyn_incidenttype_value", this._msdyn_incidenttype_value);
        writer.writeStringValue("_msdyn_primaryresolution_value", this._msdyn_primaryresolution_value);
        writer.writeStringValue("_msdyn_resourcerequirement_value", this._msdyn_resourcerequirement_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreementbookingincident>("msdyn_agreementbookingincident", this.msdyn_agreementbookingincident);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeObjectValue<Msdyn_functionallocation>("msdyn_FunctionalLocation", this.msdyn_FunctionalLocation);
        writer.writeBooleanValue("msdyn_incidentresolved", this.msdyn_incidentresolved);
        writer.writeObjectValue<Msdyn_incidenttype>("msdyn_incidenttype", this.msdyn_incidenttype);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeBooleanValue("msdyn_ismobile", this.msdyn_ismobile);
        writer.writeBooleanValue("msdyn_isprimary", this.msdyn_isprimary);
        writer.writeBooleanValue("msdyn_itemspopulated", this.msdyn_itemspopulated);
        writer.writeCollectionOfObjectValues<Msdyn_requirementcharacteristic>("msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident", this.msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident);
        writer.writeCollectionOfObjectValues<Msdyn_workordercharacteristic>("msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident", this.msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident);
        writer.writeCollectionOfObjectValues<Msdyn_workorderproduct>("msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident", this.msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident);
        writer.writeCollectionOfObjectValues<Msdyn_workorderresolution>("msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident", this.msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident);
        writer.writeCollectionOfObjectValues<Msdyn_workorderservice>("msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident", this.msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident);
        writer.writeCollectionOfObjectValues<Msdyn_workorderservicetask>("msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident", this.msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_resolution>("msdyn_PrimaryResolution", this.msdyn_PrimaryResolution);
        writer.writeObjectValue<Msdyn_resourcerequirement>("msdyn_ResourceRequirement", this.msdyn_ResourceRequirement);
        writer.writeNumberValue("msdyn_taskspercentcompleted", this.msdyn_taskspercentcompleted);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorder", this.msdyn_workorder);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_workorderincident_ActivityPointers", this.msdyn_workorderincident_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_workorderincident_Annotations", this.msdyn_workorderincident_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_workorderincident_Appointments", this.msdyn_workorderincident_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_workorderincident_AsyncOperations", this.msdyn_workorderincident_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_workorderincident_BulkDeleteFailures", this.msdyn_workorderincident_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_workorderincident_connections1", this.msdyn_workorderincident_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_workorderincident_connections2", this.msdyn_workorderincident_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderincident_DuplicateBaseRecord", this.msdyn_workorderincident_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderincident_DuplicateMatchingRecord", this.msdyn_workorderincident_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_workorderincident_Emails", this.msdyn_workorderincident_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_workorderincident_Faxes", this.msdyn_workorderincident_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_workorderincident_Letters", this.msdyn_workorderincident_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_workorderincident_MailboxTrackingFolders", this.msdyn_workorderincident_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_workorderincident_msdyn_approvals", this.msdyn_workorderincident_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_workorderincident_msdyn_bookingalerts", this.msdyn_workorderincident_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_workorderincident_msdyn_ocliveworkitems", this.msdyn_workorderincident_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_workorderincident_msdyn_ocoutboundmessages", this.msdyn_workorderincident_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_workorderincident_msdyn_ocsessions", this.msdyn_workorderincident_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_workorderincident_msfp_alerts", this.msdyn_workorderincident_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_workorderincident_msfp_surveyinvites", this.msdyn_workorderincident_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_workorderincident_msfp_surveyresponses", this.msdyn_workorderincident_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_workorderincident_PhoneCalls", this.msdyn_workorderincident_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_workorderincident_PrincipalObjectAttributeAccesses", this.msdyn_workorderincident_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_workorderincident_ProcessSession", this.msdyn_workorderincident_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_workorderincident_QueueItems", this.msdyn_workorderincident_QueueItems);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_workorderincident_RecurringAppointmentMasters", this.msdyn_workorderincident_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_workorderincident_ServiceAppointments", this.msdyn_workorderincident_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_workorderincident_SharePointDocumentLocations", this.msdyn_workorderincident_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_workorderincident_SocialActivities", this.msdyn_workorderincident_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_workorderincident_SyncErrors", this.msdyn_workorderincident_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_workorderincident_Tasks", this.msdyn_workorderincident_Tasks);
        writer.writeStringValue("msdyn_workorderincidentid", this.msdyn_workorderincidentid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
