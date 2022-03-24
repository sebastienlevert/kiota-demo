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
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingservicetaskFromDiscriminatorValue} from './createMsdyn_agreementbookingservicetaskFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_inspectiondefinitionFromDiscriminatorValue} from './createMsdyn_inspectiondefinitionFromDiscriminatorValue';
import {createMsdyn_inspectionFromDiscriminatorValue} from './createMsdyn_inspectionFromDiscriminatorValue';
import {createMsdyn_inspectionresponseFromDiscriminatorValue} from './createMsdyn_inspectionresponseFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_servicetasktypeFromDiscriminatorValue} from './createMsdyn_servicetasktypeFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderincidentFromDiscriminatorValue} from './createMsdyn_workorderincidentFromDiscriminatorValue';
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
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreementbookingservicetask, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_inspection, Msdyn_inspectiondefinition, Msdyn_inspectionresponse, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_servicetasktype, Msdyn_workorder, Msdyn_workorderincident, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Queueitem, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_workorderservicetask extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreementbookingservicetask_value?: string | undefined;
    private __msdyn_booking_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_inspection_value?: string | undefined;
    private __msdyn_inspectiondefinitionid_value?: string | undefined;
    private __msdyn_inspectionresponseid_value?: string | undefined;
    private __msdyn_tasktype_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __msdyn_workorderincident_value?: string | undefined;
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
    private _msdyn_actualduration?: number | undefined;
    private _msdyn_agreementbookingservicetask?: Msdyn_agreementbookingservicetask | undefined;
    private _msdyn_booking?: Bookableresourcebooking | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_Inspection?: Msdyn_inspection | undefined;
    private _msdyn_inspectiondefinitionid?: Msdyn_inspectiondefinition | undefined;
    private _msdyn_inspectionenabled?: boolean | undefined;
    private _msdyn_inspectionresponseid?: Msdyn_inspectionresponse | undefined;
    private _msdyn_inspectionresult?: number | undefined;
    private _msdyn_inspectiontaskresult?: number | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_percentcomplete?: number | undefined;
    private _msdyn_surveyboundedoutput?: string | undefined;
    private _msdyn_tasktype?: Msdyn_servicetasktype | undefined;
    private _msdyn_workorder?: Msdyn_workorder | undefined;
    private _msdyn_workorderincident?: Msdyn_workorderincident | undefined;
    private _msdyn_workorderservicetask_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_workorderservicetask_Annotations?: Annotation[] | undefined;
    private _msdyn_workorderservicetask_Appointments?: Appointment[] | undefined;
    private _msdyn_workorderservicetask_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_workorderservicetask_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_workorderservicetask_connections1?: Connection[] | undefined;
    private _msdyn_workorderservicetask_connections2?: Connection[] | undefined;
    private _msdyn_workorderservicetask_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderservicetask_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderservicetask_Emails?: Email[] | undefined;
    private _msdyn_workorderservicetask_Faxes?: Fax[] | undefined;
    private _msdyn_workorderservicetask_Letters?: Letter[] | undefined;
    private _msdyn_workorderservicetask_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_workorderservicetask_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_workorderservicetask_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_workorderservicetask_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_workorderservicetask_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_workorderservicetask_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_workorderservicetask_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_workorderservicetask_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_workorderservicetask_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_workorderservicetask_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_workorderservicetask_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_workorderservicetask_ProcessSession?: Processsession[] | undefined;
    private _msdyn_workorderservicetask_QueueItems?: Queueitem[] | undefined;
    private _msdyn_workorderservicetask_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_workorderservicetask_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_workorderservicetask_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_workorderservicetask_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_workorderservicetask_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_workorderservicetask_Tasks?: Task[] | undefined;
    private _msdyn_workorderservicetaskid?: string | undefined;
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
     * Gets the _msdyn_agreementbookingservicetask_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingservicetask_value() {
        return this.__msdyn_agreementbookingservicetask_value;
    };
    /**
     * Sets the _msdyn_agreementbookingservicetask_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingservicetask_value property.
     */
    public set _msdyn_agreementbookingservicetask_value(value: string | undefined) {
        this.__msdyn_agreementbookingservicetask_value = value;
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
     * Gets the _msdyn_inspection_value property value. 
     * @returns a string
     */
    public get _msdyn_inspection_value() {
        return this.__msdyn_inspection_value;
    };
    /**
     * Sets the _msdyn_inspection_value property value. 
     * @param value Value to set for the _msdyn_inspection_value property.
     */
    public set _msdyn_inspection_value(value: string | undefined) {
        this.__msdyn_inspection_value = value;
    };
    /**
     * Gets the _msdyn_inspectiondefinitionid_value property value. 
     * @returns a string
     */
    public get _msdyn_inspectiondefinitionid_value() {
        return this.__msdyn_inspectiondefinitionid_value;
    };
    /**
     * Sets the _msdyn_inspectiondefinitionid_value property value. 
     * @param value Value to set for the _msdyn_inspectiondefinitionid_value property.
     */
    public set _msdyn_inspectiondefinitionid_value(value: string | undefined) {
        this.__msdyn_inspectiondefinitionid_value = value;
    };
    /**
     * Gets the _msdyn_inspectionresponseid_value property value. 
     * @returns a string
     */
    public get _msdyn_inspectionresponseid_value() {
        return this.__msdyn_inspectionresponseid_value;
    };
    /**
     * Sets the _msdyn_inspectionresponseid_value property value. 
     * @param value Value to set for the _msdyn_inspectionresponseid_value property.
     */
    public set _msdyn_inspectionresponseid_value(value: string | undefined) {
        this.__msdyn_inspectionresponseid_value = value;
    };
    /**
     * Gets the _msdyn_tasktype_value property value. 
     * @returns a string
     */
    public get _msdyn_tasktype_value() {
        return this.__msdyn_tasktype_value;
    };
    /**
     * Sets the _msdyn_tasktype_value property value. 
     * @param value Value to set for the _msdyn_tasktype_value property.
     */
    public set _msdyn_tasktype_value(value: string | undefined) {
        this.__msdyn_tasktype_value = value;
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
     * Instantiates a new msdyn_workorderservicetask and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreementbookingservicetask_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_agreementbookingservicetask_value = n.getStringValue(); },
            "_msdyn_booking_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_booking_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_inspection_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_inspection_value = n.getStringValue(); },
            "_msdyn_inspectiondefinitionid_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_inspectiondefinitionid_value = n.getStringValue(); },
            "_msdyn_inspectionresponseid_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_inspectionresponseid_value = n.getStringValue(); },
            "_msdyn_tasktype_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_tasktype_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_workorder_value = n.getStringValue(); },
            "_msdyn_workorderincident_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._msdyn_workorderincident_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_workorderservicetask)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_workorderservicetask).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_workorderservicetask).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderservicetask).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_workorderservicetask).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_workorderservicetask).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_workorderservicetask).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderservicetask).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actualduration": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_actualduration = n.getNumberValue(); },
            "msdyn_agreementbookingservicetask": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_agreementbookingservicetask = n.getObjectValue<Msdyn_agreementbookingservicetask>(createMsdyn_agreementbookingservicetaskFromDiscriminatorValue); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_booking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_Inspection": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_Inspection = n.getObjectValue<Msdyn_inspection>(createMsdyn_inspectionFromDiscriminatorValue); },
            "msdyn_inspectiondefinitionid": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_inspectiondefinitionid = n.getObjectValue<Msdyn_inspectiondefinition>(createMsdyn_inspectiondefinitionFromDiscriminatorValue); },
            "msdyn_inspectionenabled": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_inspectionenabled = n.getBooleanValue(); },
            "msdyn_inspectionresponseid": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_inspectionresponseid = n.getObjectValue<Msdyn_inspectionresponse>(createMsdyn_inspectionresponseFromDiscriminatorValue); },
            "msdyn_inspectionresult": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_inspectionresult = n.getNumberValue(); },
            "msdyn_inspectiontaskresult": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_inspectiontaskresult = n.getNumberValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_internalflags = n.getStringValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_name = n.getStringValue(); },
            "msdyn_percentcomplete": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_percentcomplete = n.getNumberValue(); },
            "msdyn_surveyboundedoutput": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_surveyboundedoutput = n.getStringValue(); },
            "msdyn_tasktype": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_tasktype = n.getObjectValue<Msdyn_servicetasktype>(createMsdyn_servicetasktypeFromDiscriminatorValue); },
            "msdyn_workorder": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_workorderincident": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderincident = n.getObjectValue<Msdyn_workorderincident>(createMsdyn_workorderincidentFromDiscriminatorValue); },
            "msdyn_workorderservicetask_ActivityPointers": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_workorderservicetask_Annotations": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_workorderservicetask_Appointments": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_workorderservicetask_AsyncOperations": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_workorderservicetask_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_workorderservicetask_connections1": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_workorderservicetask_connections2": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_workorderservicetask_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderservicetask_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderservicetask_Emails": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_workorderservicetask_Faxes": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_workorderservicetask_Letters": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_workorderservicetask_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msfp_alerts": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_workorderservicetask_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_workorderservicetask_PhoneCalls": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_workorderservicetask_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_workorderservicetask_ProcessSession": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_workorderservicetask_QueueItems": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_workorderservicetask_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_workorderservicetask_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_workorderservicetask_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_workorderservicetask_SocialActivities": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_workorderservicetask_SyncErrors": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_workorderservicetask_Tasks": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetask_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_workorderservicetaskid": (o, n) => { (o as unknown as Msdyn_workorderservicetask).msdyn_workorderservicetaskid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_workorderservicetask).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_workorderservicetask).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_workorderservicetask).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_workorderservicetask).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_workorderservicetask).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_workorderservicetask).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_workorderservicetask).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_workorderservicetask).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_workorderservicetask).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_workorderservicetask).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actualduration property value. 
     * @returns a integer
     */
    public get msdyn_actualduration() {
        return this._msdyn_actualduration;
    };
    /**
     * Sets the msdyn_actualduration property value. 
     * @param value Value to set for the msdyn_actualduration property.
     */
    public set msdyn_actualduration(value: number | undefined) {
        this._msdyn_actualduration = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask property value. 
     * @returns a msdyn_agreementbookingservicetask
     */
    public get msdyn_agreementbookingservicetask() {
        return this._msdyn_agreementbookingservicetask;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask property.
     */
    public set msdyn_agreementbookingservicetask(value: Msdyn_agreementbookingservicetask | undefined) {
        this._msdyn_agreementbookingservicetask = value;
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
     * Gets the msdyn_Inspection property value. 
     * @returns a msdyn_inspection
     */
    public get msdyn_Inspection() {
        return this._msdyn_Inspection;
    };
    /**
     * Sets the msdyn_Inspection property value. 
     * @param value Value to set for the msdyn_Inspection property.
     */
    public set msdyn_Inspection(value: Msdyn_inspection | undefined) {
        this._msdyn_Inspection = value;
    };
    /**
     * Gets the msdyn_inspectiondefinitionid property value. 
     * @returns a msdyn_inspectiondefinition
     */
    public get msdyn_inspectiondefinitionid() {
        return this._msdyn_inspectiondefinitionid;
    };
    /**
     * Sets the msdyn_inspectiondefinitionid property value. 
     * @param value Value to set for the msdyn_inspectiondefinitionid property.
     */
    public set msdyn_inspectiondefinitionid(value: Msdyn_inspectiondefinition | undefined) {
        this._msdyn_inspectiondefinitionid = value;
    };
    /**
     * Gets the msdyn_inspectionenabled property value. 
     * @returns a boolean
     */
    public get msdyn_inspectionenabled() {
        return this._msdyn_inspectionenabled;
    };
    /**
     * Sets the msdyn_inspectionenabled property value. 
     * @param value Value to set for the msdyn_inspectionenabled property.
     */
    public set msdyn_inspectionenabled(value: boolean | undefined) {
        this._msdyn_inspectionenabled = value;
    };
    /**
     * Gets the msdyn_inspectionresponseid property value. 
     * @returns a msdyn_inspectionresponse
     */
    public get msdyn_inspectionresponseid() {
        return this._msdyn_inspectionresponseid;
    };
    /**
     * Sets the msdyn_inspectionresponseid property value. 
     * @param value Value to set for the msdyn_inspectionresponseid property.
     */
    public set msdyn_inspectionresponseid(value: Msdyn_inspectionresponse | undefined) {
        this._msdyn_inspectionresponseid = value;
    };
    /**
     * Gets the msdyn_inspectionresult property value. 
     * @returns a integer
     */
    public get msdyn_inspectionresult() {
        return this._msdyn_inspectionresult;
    };
    /**
     * Sets the msdyn_inspectionresult property value. 
     * @param value Value to set for the msdyn_inspectionresult property.
     */
    public set msdyn_inspectionresult(value: number | undefined) {
        this._msdyn_inspectionresult = value;
    };
    /**
     * Gets the msdyn_inspectiontaskresult property value. 
     * @returns a integer
     */
    public get msdyn_inspectiontaskresult() {
        return this._msdyn_inspectiontaskresult;
    };
    /**
     * Sets the msdyn_inspectiontaskresult property value. 
     * @param value Value to set for the msdyn_inspectiontaskresult property.
     */
    public set msdyn_inspectiontaskresult(value: number | undefined) {
        this._msdyn_inspectiontaskresult = value;
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
     * Gets the msdyn_percentcomplete property value. 
     * @returns a double
     */
    public get msdyn_percentcomplete() {
        return this._msdyn_percentcomplete;
    };
    /**
     * Sets the msdyn_percentcomplete property value. 
     * @param value Value to set for the msdyn_percentcomplete property.
     */
    public set msdyn_percentcomplete(value: number | undefined) {
        this._msdyn_percentcomplete = value;
    };
    /**
     * Gets the msdyn_surveyboundedoutput property value. 
     * @returns a string
     */
    public get msdyn_surveyboundedoutput() {
        return this._msdyn_surveyboundedoutput;
    };
    /**
     * Sets the msdyn_surveyboundedoutput property value. 
     * @param value Value to set for the msdyn_surveyboundedoutput property.
     */
    public set msdyn_surveyboundedoutput(value: string | undefined) {
        this._msdyn_surveyboundedoutput = value;
    };
    /**
     * Gets the msdyn_tasktype property value. 
     * @returns a msdyn_servicetasktype
     */
    public get msdyn_tasktype() {
        return this._msdyn_tasktype;
    };
    /**
     * Sets the msdyn_tasktype property value. 
     * @param value Value to set for the msdyn_tasktype property.
     */
    public set msdyn_tasktype(value: Msdyn_servicetasktype | undefined) {
        this._msdyn_tasktype = value;
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
     * Gets the msdyn_workorderservicetask_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_workorderservicetask_ActivityPointers() {
        return this._msdyn_workorderservicetask_ActivityPointers;
    };
    /**
     * Sets the msdyn_workorderservicetask_ActivityPointers property value. 
     * @param value Value to set for the msdyn_workorderservicetask_ActivityPointers property.
     */
    public set msdyn_workorderservicetask_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_workorderservicetask_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_workorderservicetask_Annotations() {
        return this._msdyn_workorderservicetask_Annotations;
    };
    /**
     * Sets the msdyn_workorderservicetask_Annotations property value. 
     * @param value Value to set for the msdyn_workorderservicetask_Annotations property.
     */
    public set msdyn_workorderservicetask_Annotations(value: Annotation[] | undefined) {
        this._msdyn_workorderservicetask_Annotations = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_workorderservicetask_Appointments() {
        return this._msdyn_workorderservicetask_Appointments;
    };
    /**
     * Sets the msdyn_workorderservicetask_Appointments property value. 
     * @param value Value to set for the msdyn_workorderservicetask_Appointments property.
     */
    public set msdyn_workorderservicetask_Appointments(value: Appointment[] | undefined) {
        this._msdyn_workorderservicetask_Appointments = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_workorderservicetask_AsyncOperations() {
        return this._msdyn_workorderservicetask_AsyncOperations;
    };
    /**
     * Sets the msdyn_workorderservicetask_AsyncOperations property value. 
     * @param value Value to set for the msdyn_workorderservicetask_AsyncOperations property.
     */
    public set msdyn_workorderservicetask_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_workorderservicetask_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_workorderservicetask_BulkDeleteFailures() {
        return this._msdyn_workorderservicetask_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_workorderservicetask_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_workorderservicetask_BulkDeleteFailures property.
     */
    public set msdyn_workorderservicetask_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_workorderservicetask_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_workorderservicetask_connections1() {
        return this._msdyn_workorderservicetask_connections1;
    };
    /**
     * Sets the msdyn_workorderservicetask_connections1 property value. 
     * @param value Value to set for the msdyn_workorderservicetask_connections1 property.
     */
    public set msdyn_workorderservicetask_connections1(value: Connection[] | undefined) {
        this._msdyn_workorderservicetask_connections1 = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_workorderservicetask_connections2() {
        return this._msdyn_workorderservicetask_connections2;
    };
    /**
     * Sets the msdyn_workorderservicetask_connections2 property value. 
     * @param value Value to set for the msdyn_workorderservicetask_connections2 property.
     */
    public set msdyn_workorderservicetask_connections2(value: Connection[] | undefined) {
        this._msdyn_workorderservicetask_connections2 = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderservicetask_DuplicateBaseRecord() {
        return this._msdyn_workorderservicetask_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_workorderservicetask_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_workorderservicetask_DuplicateBaseRecord property.
     */
    public set msdyn_workorderservicetask_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderservicetask_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderservicetask_DuplicateMatchingRecord() {
        return this._msdyn_workorderservicetask_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_workorderservicetask_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_workorderservicetask_DuplicateMatchingRecord property.
     */
    public set msdyn_workorderservicetask_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderservicetask_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_Emails property value. 
     * @returns a email
     */
    public get msdyn_workorderservicetask_Emails() {
        return this._msdyn_workorderservicetask_Emails;
    };
    /**
     * Sets the msdyn_workorderservicetask_Emails property value. 
     * @param value Value to set for the msdyn_workorderservicetask_Emails property.
     */
    public set msdyn_workorderservicetask_Emails(value: Email[] | undefined) {
        this._msdyn_workorderservicetask_Emails = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_workorderservicetask_Faxes() {
        return this._msdyn_workorderservicetask_Faxes;
    };
    /**
     * Sets the msdyn_workorderservicetask_Faxes property value. 
     * @param value Value to set for the msdyn_workorderservicetask_Faxes property.
     */
    public set msdyn_workorderservicetask_Faxes(value: Fax[] | undefined) {
        this._msdyn_workorderservicetask_Faxes = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_Letters property value. 
     * @returns a letter
     */
    public get msdyn_workorderservicetask_Letters() {
        return this._msdyn_workorderservicetask_Letters;
    };
    /**
     * Sets the msdyn_workorderservicetask_Letters property value. 
     * @param value Value to set for the msdyn_workorderservicetask_Letters property.
     */
    public set msdyn_workorderservicetask_Letters(value: Letter[] | undefined) {
        this._msdyn_workorderservicetask_Letters = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_workorderservicetask_MailboxTrackingFolders() {
        return this._msdyn_workorderservicetask_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_workorderservicetask_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_workorderservicetask_MailboxTrackingFolders property.
     */
    public set msdyn_workorderservicetask_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_workorderservicetask_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_workorderservicetask_msdyn_approvals() {
        return this._msdyn_workorderservicetask_msdyn_approvals;
    };
    /**
     * Sets the msdyn_workorderservicetask_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msdyn_approvals property.
     */
    public set msdyn_workorderservicetask_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_workorderservicetask_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_workorderservicetask_msdyn_bookingalerts() {
        return this._msdyn_workorderservicetask_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_workorderservicetask_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msdyn_bookingalerts property.
     */
    public set msdyn_workorderservicetask_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_workorderservicetask_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_workorderservicetask_msdyn_ocliveworkitems() {
        return this._msdyn_workorderservicetask_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_workorderservicetask_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msdyn_ocliveworkitems property.
     */
    public set msdyn_workorderservicetask_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_workorderservicetask_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_workorderservicetask_msdyn_ocoutboundmessages() {
        return this._msdyn_workorderservicetask_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_workorderservicetask_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msdyn_ocoutboundmessages property.
     */
    public set msdyn_workorderservicetask_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_workorderservicetask_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_workorderservicetask_msdyn_ocsessions() {
        return this._msdyn_workorderservicetask_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_workorderservicetask_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msdyn_ocsessions property.
     */
    public set msdyn_workorderservicetask_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_workorderservicetask_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_workorderservicetask_msfp_alerts() {
        return this._msdyn_workorderservicetask_msfp_alerts;
    };
    /**
     * Sets the msdyn_workorderservicetask_msfp_alerts property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msfp_alerts property.
     */
    public set msdyn_workorderservicetask_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_workorderservicetask_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_workorderservicetask_msfp_surveyinvites() {
        return this._msdyn_workorderservicetask_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_workorderservicetask_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msfp_surveyinvites property.
     */
    public set msdyn_workorderservicetask_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_workorderservicetask_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_workorderservicetask_msfp_surveyresponses() {
        return this._msdyn_workorderservicetask_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_workorderservicetask_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_workorderservicetask_msfp_surveyresponses property.
     */
    public set msdyn_workorderservicetask_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_workorderservicetask_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_workorderservicetask_PhoneCalls() {
        return this._msdyn_workorderservicetask_PhoneCalls;
    };
    /**
     * Sets the msdyn_workorderservicetask_PhoneCalls property value. 
     * @param value Value to set for the msdyn_workorderservicetask_PhoneCalls property.
     */
    public set msdyn_workorderservicetask_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_workorderservicetask_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_workorderservicetask_PrincipalObjectAttributeAccesses() {
        return this._msdyn_workorderservicetask_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_workorderservicetask_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_workorderservicetask_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_workorderservicetask_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_workorderservicetask_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_workorderservicetask_ProcessSession() {
        return this._msdyn_workorderservicetask_ProcessSession;
    };
    /**
     * Sets the msdyn_workorderservicetask_ProcessSession property value. 
     * @param value Value to set for the msdyn_workorderservicetask_ProcessSession property.
     */
    public set msdyn_workorderservicetask_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_workorderservicetask_ProcessSession = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_workorderservicetask_QueueItems() {
        return this._msdyn_workorderservicetask_QueueItems;
    };
    /**
     * Sets the msdyn_workorderservicetask_QueueItems property value. 
     * @param value Value to set for the msdyn_workorderservicetask_QueueItems property.
     */
    public set msdyn_workorderservicetask_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_workorderservicetask_QueueItems = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_workorderservicetask_RecurringAppointmentMasters() {
        return this._msdyn_workorderservicetask_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_workorderservicetask_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_workorderservicetask_RecurringAppointmentMasters property.
     */
    public set msdyn_workorderservicetask_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_workorderservicetask_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_workorderservicetask_ServiceAppointments() {
        return this._msdyn_workorderservicetask_ServiceAppointments;
    };
    /**
     * Sets the msdyn_workorderservicetask_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_workorderservicetask_ServiceAppointments property.
     */
    public set msdyn_workorderservicetask_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_workorderservicetask_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_workorderservicetask_SharePointDocumentLocations() {
        return this._msdyn_workorderservicetask_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_workorderservicetask_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_workorderservicetask_SharePointDocumentLocations property.
     */
    public set msdyn_workorderservicetask_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_workorderservicetask_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_workorderservicetask_SocialActivities() {
        return this._msdyn_workorderservicetask_SocialActivities;
    };
    /**
     * Sets the msdyn_workorderservicetask_SocialActivities property value. 
     * @param value Value to set for the msdyn_workorderservicetask_SocialActivities property.
     */
    public set msdyn_workorderservicetask_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_workorderservicetask_SocialActivities = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_workorderservicetask_SyncErrors() {
        return this._msdyn_workorderservicetask_SyncErrors;
    };
    /**
     * Sets the msdyn_workorderservicetask_SyncErrors property value. 
     * @param value Value to set for the msdyn_workorderservicetask_SyncErrors property.
     */
    public set msdyn_workorderservicetask_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_workorderservicetask_SyncErrors = value;
    };
    /**
     * Gets the msdyn_workorderservicetask_Tasks property value. 
     * @returns a task
     */
    public get msdyn_workorderservicetask_Tasks() {
        return this._msdyn_workorderservicetask_Tasks;
    };
    /**
     * Sets the msdyn_workorderservicetask_Tasks property value. 
     * @param value Value to set for the msdyn_workorderservicetask_Tasks property.
     */
    public set msdyn_workorderservicetask_Tasks(value: Task[] | undefined) {
        this._msdyn_workorderservicetask_Tasks = value;
    };
    /**
     * Gets the msdyn_workorderservicetaskid property value. 
     * @returns a string
     */
    public get msdyn_workorderservicetaskid() {
        return this._msdyn_workorderservicetaskid;
    };
    /**
     * Sets the msdyn_workorderservicetaskid property value. 
     * @param value Value to set for the msdyn_workorderservicetaskid property.
     */
    public set msdyn_workorderservicetaskid(value: string | undefined) {
        this._msdyn_workorderservicetaskid = value;
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
        writer.writeStringValue("_msdyn_agreementbookingservicetask_value", this._msdyn_agreementbookingservicetask_value);
        writer.writeStringValue("_msdyn_booking_value", this._msdyn_booking_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_inspection_value", this._msdyn_inspection_value);
        writer.writeStringValue("_msdyn_inspectiondefinitionid_value", this._msdyn_inspectiondefinitionid_value);
        writer.writeStringValue("_msdyn_inspectionresponseid_value", this._msdyn_inspectionresponseid_value);
        writer.writeStringValue("_msdyn_tasktype_value", this._msdyn_tasktype_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_msdyn_workorderincident_value", this._msdyn_workorderincident_value);
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
        writer.writeNumberValue("msdyn_actualduration", this.msdyn_actualduration);
        writer.writeObjectValue<Msdyn_agreementbookingservicetask>("msdyn_agreementbookingservicetask", this.msdyn_agreementbookingservicetask);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_booking", this.msdyn_booking);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeObjectValue<Msdyn_inspection>("msdyn_Inspection", this.msdyn_Inspection);
        writer.writeObjectValue<Msdyn_inspectiondefinition>("msdyn_inspectiondefinitionid", this.msdyn_inspectiondefinitionid);
        writer.writeBooleanValue("msdyn_inspectionenabled", this.msdyn_inspectionenabled);
        writer.writeObjectValue<Msdyn_inspectionresponse>("msdyn_inspectionresponseid", this.msdyn_inspectionresponseid);
        writer.writeNumberValue("msdyn_inspectionresult", this.msdyn_inspectionresult);
        writer.writeNumberValue("msdyn_inspectiontaskresult", this.msdyn_inspectiontaskresult);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_percentcomplete", this.msdyn_percentcomplete);
        writer.writeStringValue("msdyn_surveyboundedoutput", this.msdyn_surveyboundedoutput);
        writer.writeObjectValue<Msdyn_servicetasktype>("msdyn_tasktype", this.msdyn_tasktype);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_workorder", this.msdyn_workorder);
        writer.writeObjectValue<Msdyn_workorderincident>("msdyn_workorderincident", this.msdyn_workorderincident);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_workorderservicetask_ActivityPointers", this.msdyn_workorderservicetask_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_workorderservicetask_Annotations", this.msdyn_workorderservicetask_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_workorderservicetask_Appointments", this.msdyn_workorderservicetask_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_workorderservicetask_AsyncOperations", this.msdyn_workorderservicetask_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_workorderservicetask_BulkDeleteFailures", this.msdyn_workorderservicetask_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_workorderservicetask_connections1", this.msdyn_workorderservicetask_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_workorderservicetask_connections2", this.msdyn_workorderservicetask_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderservicetask_DuplicateBaseRecord", this.msdyn_workorderservicetask_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderservicetask_DuplicateMatchingRecord", this.msdyn_workorderservicetask_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_workorderservicetask_Emails", this.msdyn_workorderservicetask_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_workorderservicetask_Faxes", this.msdyn_workorderservicetask_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_workorderservicetask_Letters", this.msdyn_workorderservicetask_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_workorderservicetask_MailboxTrackingFolders", this.msdyn_workorderservicetask_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_workorderservicetask_msdyn_approvals", this.msdyn_workorderservicetask_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_workorderservicetask_msdyn_bookingalerts", this.msdyn_workorderservicetask_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_workorderservicetask_msdyn_ocliveworkitems", this.msdyn_workorderservicetask_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_workorderservicetask_msdyn_ocoutboundmessages", this.msdyn_workorderservicetask_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_workorderservicetask_msdyn_ocsessions", this.msdyn_workorderservicetask_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_workorderservicetask_msfp_alerts", this.msdyn_workorderservicetask_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_workorderservicetask_msfp_surveyinvites", this.msdyn_workorderservicetask_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_workorderservicetask_msfp_surveyresponses", this.msdyn_workorderservicetask_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_workorderservicetask_PhoneCalls", this.msdyn_workorderservicetask_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_workorderservicetask_PrincipalObjectAttributeAccesses", this.msdyn_workorderservicetask_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_workorderservicetask_ProcessSession", this.msdyn_workorderservicetask_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_workorderservicetask_QueueItems", this.msdyn_workorderservicetask_QueueItems);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_workorderservicetask_RecurringAppointmentMasters", this.msdyn_workorderservicetask_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_workorderservicetask_ServiceAppointments", this.msdyn_workorderservicetask_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_workorderservicetask_SharePointDocumentLocations", this.msdyn_workorderservicetask_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_workorderservicetask_SocialActivities", this.msdyn_workorderservicetask_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_workorderservicetask_SyncErrors", this.msdyn_workorderservicetask_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_workorderservicetask_Tasks", this.msdyn_workorderservicetask_Tasks);
        writer.writeStringValue("msdyn_workorderservicetaskid", this.msdyn_workorderservicetaskid);
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
