import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBookingstatusFromDiscriminatorValue} from './createBookingstatusFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_journalFromDiscriminatorValue} from './createMsdyn_journalFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_timeentrysettingFromDiscriminatorValue} from './createMsdyn_timeentrysettingFromDiscriminatorValue';
import {createMsdyn_timeoffcalendarFromDiscriminatorValue} from './createMsdyn_timeoffcalendarFromDiscriminatorValue';
import {createMsdyn_timeoffrequestFromDiscriminatorValue} from './createMsdyn_timeoffrequestFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bookableresourcebooking, Bookableresourcecategory, Bookingstatus, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_journal, Msdyn_organizationalunit, Msdyn_project, Msdyn_projectapproval, Msdyn_projecttask, Msdyn_timeentrysetting, Msdyn_timeoffcalendar, Msdyn_timeoffrequest, Msdyn_transactioncategory, Msdyn_workorder, Principal, Principalobjectattributeaccess, Processsession, Processstage, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_timeentry extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_bookableresourcebooking_value?: string | undefined;
    private __msdyn_bookingstatus_value?: string | undefined;
    private __msdyn_manager_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_projecttask_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_resourceorganizationalunitid_value?: string | undefined;
    private __msdyn_timeentrysettingid_value?: string | undefined;
    private __msdyn_timeoffrequest_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_BookableResourceBooking?: Bookableresourcebooking | undefined;
    private _msdyn_BookingStatus?: Bookingstatus | undefined;
    private _msdyn_date?: Date | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_end?: Date | undefined;
    private _msdyn_entrystatus?: number | undefined;
    private _msdyn_externaldescription?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_manager?: Systemuser | undefined;
    private _msdyn_msdyn_journal_msdyn_timeentry?: Msdyn_journal[] | undefined;
    private _msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry?: Msdyn_projectapproval[] | undefined;
    private _msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry?: Msdyn_timeoffcalendar[] | undefined;
    private _msdyn_project?: Msdyn_project | undefined;
    private _msdyn_projectTask?: Msdyn_projecttask | undefined;
    private _msdyn_relateditemid?: string | undefined;
    private _msdyn_relateditemtype?: number | undefined;
    private _msdyn_resourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_ResourceOrganizationalUnitId?: Msdyn_organizationalunit | undefined;
    private _msdyn_start?: Date | undefined;
    private _msdyn_targetentrystatus?: number | undefined;
    private _msdyn_timeentry_Annotations?: Annotation[] | undefined;
    private _msdyn_timeentry_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_timeentry_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_timeentry_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_timeentry_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_timeentry_ProcessSession?: Processsession[] | undefined;
    private _msdyn_timeentry_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_timeentryid?: string | undefined;
    private _msdyn_timeentrysettingId?: Msdyn_timeentrysetting | undefined;
    private _msdyn_timeoffrequest?: Msdyn_timeoffrequest | undefined;
    private _msdyn_transactioncategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_WorkOrder?: Msdyn_workorder | undefined;
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
     * Gets the _msdyn_bookableresource_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresource_value() {
        return this.__msdyn_bookableresource_value;
    };
    /**
     * Sets the _msdyn_bookableresource_value property value. 
     * @param value Value to set for the _msdyn_bookableresource_value property.
     */
    public set _msdyn_bookableresource_value(value: string | undefined) {
        this.__msdyn_bookableresource_value = value;
    };
    /**
     * Gets the _msdyn_bookableresourcebooking_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresourcebooking_value() {
        return this.__msdyn_bookableresourcebooking_value;
    };
    /**
     * Sets the _msdyn_bookableresourcebooking_value property value. 
     * @param value Value to set for the _msdyn_bookableresourcebooking_value property.
     */
    public set _msdyn_bookableresourcebooking_value(value: string | undefined) {
        this.__msdyn_bookableresourcebooking_value = value;
    };
    /**
     * Gets the _msdyn_bookingstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_bookingstatus_value() {
        return this.__msdyn_bookingstatus_value;
    };
    /**
     * Sets the _msdyn_bookingstatus_value property value. 
     * @param value Value to set for the _msdyn_bookingstatus_value property.
     */
    public set _msdyn_bookingstatus_value(value: string | undefined) {
        this.__msdyn_bookingstatus_value = value;
    };
    /**
     * Gets the _msdyn_manager_value property value. 
     * @returns a string
     */
    public get _msdyn_manager_value() {
        return this.__msdyn_manager_value;
    };
    /**
     * Sets the _msdyn_manager_value property value. 
     * @param value Value to set for the _msdyn_manager_value property.
     */
    public set _msdyn_manager_value(value: string | undefined) {
        this.__msdyn_manager_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
    };
    /**
     * Gets the _msdyn_projecttask_value property value. 
     * @returns a string
     */
    public get _msdyn_projecttask_value() {
        return this.__msdyn_projecttask_value;
    };
    /**
     * Sets the _msdyn_projecttask_value property value. 
     * @param value Value to set for the _msdyn_projecttask_value property.
     */
    public set _msdyn_projecttask_value(value: string | undefined) {
        this.__msdyn_projecttask_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
    };
    /**
     * Gets the _msdyn_resourceorganizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourceorganizationalunitid_value() {
        return this.__msdyn_resourceorganizationalunitid_value;
    };
    /**
     * Sets the _msdyn_resourceorganizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_resourceorganizationalunitid_value property.
     */
    public set _msdyn_resourceorganizationalunitid_value(value: string | undefined) {
        this.__msdyn_resourceorganizationalunitid_value = value;
    };
    /**
     * Gets the _msdyn_timeentrysettingid_value property value. 
     * @returns a string
     */
    public get _msdyn_timeentrysettingid_value() {
        return this.__msdyn_timeentrysettingid_value;
    };
    /**
     * Sets the _msdyn_timeentrysettingid_value property value. 
     * @param value Value to set for the _msdyn_timeentrysettingid_value property.
     */
    public set _msdyn_timeentrysettingid_value(value: string | undefined) {
        this.__msdyn_timeentrysettingid_value = value;
    };
    /**
     * Gets the _msdyn_timeoffrequest_value property value. 
     * @returns a string
     */
    public get _msdyn_timeoffrequest_value() {
        return this.__msdyn_timeoffrequest_value;
    };
    /**
     * Sets the _msdyn_timeoffrequest_value property value. 
     * @param value Value to set for the _msdyn_timeoffrequest_value property.
     */
    public set _msdyn_timeoffrequest_value(value: string | undefined) {
        this.__msdyn_timeoffrequest_value = value;
    };
    /**
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
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
     * Instantiates a new msdyn_timeentry and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_timeentry)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_timeentry)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_timeentry)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_timeentry)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_bookableresourcebooking_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_bookableresourcebooking_value = n.getStringValue(); },
            "_msdyn_bookingstatus_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_bookingstatus_value = n.getStringValue(); },
            "_msdyn_manager_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_manager_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_projecttask_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_projecttask_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_resourceorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_resourceorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_timeentrysettingid_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_timeentrysettingid_value = n.getStringValue(); },
            "_msdyn_timeoffrequest_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_timeoffrequest_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_timeentry)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_timeentry)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_timeentry)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_timeentry)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_timeentry)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_timeentry)._stageid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_timeentry).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_timeentry).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_timeentry).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_timeentry).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_timeentry).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_timeentry).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_timeentry).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_BookableResourceBooking": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_BookableResourceBooking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_BookingStatus": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_BookingStatus = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_date": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_date = n.getDateValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_description = n.getStringValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_duration = n.getNumberValue(); },
            "msdyn_end": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_end = n.getDateValue(); },
            "msdyn_entrystatus": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_entrystatus = n.getNumberValue(); },
            "msdyn_externaldescription": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_externaldescription = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_internalflags = n.getStringValue(); },
            "msdyn_manager": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_manager = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_msdyn_journal_msdyn_timeentry": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_msdyn_journal_msdyn_timeentry = n.getCollectionOfObjectValues<Msdyn_journal>(createMsdyn_journalFromDiscriminatorValue); },
            "msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry = n.getCollectionOfObjectValues<Msdyn_timeoffcalendar>(createMsdyn_timeoffcalendarFromDiscriminatorValue); },
            "msdyn_project": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projectTask": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_projectTask = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_relateditemid": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_relateditemid = n.getStringValue(); },
            "msdyn_relateditemtype": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_relateditemtype = n.getNumberValue(); },
            "msdyn_resourceCategory": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_resourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_ResourceOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_ResourceOrganizationalUnitId = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_start": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_start = n.getDateValue(); },
            "msdyn_targetentrystatus": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_targetentrystatus = n.getNumberValue(); },
            "msdyn_timeentry_Annotations": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_timeentry_AsyncOperations": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_timeentry_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_timeentry_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_timeentry_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_timeentry_ProcessSession": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_timeentry_SyncErrors": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentry_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_timeentryid": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentryid = n.getStringValue(); },
            "msdyn_timeentrysettingId": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeentrysettingId = n.getObjectValue<Msdyn_timeentrysetting>(createMsdyn_timeentrysettingFromDiscriminatorValue); },
            "msdyn_timeoffrequest": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_timeoffrequest = n.getObjectValue<Msdyn_timeoffrequest>(createMsdyn_timeoffrequestFromDiscriminatorValue); },
            "msdyn_transactioncategory": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_transactioncategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_type = n.getNumberValue(); },
            "msdyn_WorkOrder": (o, n) => { (o as unknown as Msdyn_timeentry).msdyn_WorkOrder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_timeentry).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_timeentry).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_timeentry).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_timeentry).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_timeentry).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_timeentry).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_timeentry).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_timeentry).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_timeentry).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_timeentry).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_timeentry).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_timeentry).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_timeentry).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_bookableresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresource() {
        return this._msdyn_bookableresource;
    };
    /**
     * Sets the msdyn_bookableresource property value. 
     * @param value Value to set for the msdyn_bookableresource property.
     */
    public set msdyn_bookableresource(value: Bookableresource | undefined) {
        this._msdyn_bookableresource = value;
    };
    /**
     * Gets the msdyn_BookableResourceBooking property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_BookableResourceBooking() {
        return this._msdyn_BookableResourceBooking;
    };
    /**
     * Sets the msdyn_BookableResourceBooking property value. 
     * @param value Value to set for the msdyn_BookableResourceBooking property.
     */
    public set msdyn_BookableResourceBooking(value: Bookableresourcebooking | undefined) {
        this._msdyn_BookableResourceBooking = value;
    };
    /**
     * Gets the msdyn_BookingStatus property value. 
     * @returns a bookingstatus
     */
    public get msdyn_BookingStatus() {
        return this._msdyn_BookingStatus;
    };
    /**
     * Sets the msdyn_BookingStatus property value. 
     * @param value Value to set for the msdyn_BookingStatus property.
     */
    public set msdyn_BookingStatus(value: Bookingstatus | undefined) {
        this._msdyn_BookingStatus = value;
    };
    /**
     * Gets the msdyn_date property value. 
     * @returns a Date
     */
    public get msdyn_date() {
        return this._msdyn_date;
    };
    /**
     * Sets the msdyn_date property value. 
     * @param value Value to set for the msdyn_date property.
     */
    public set msdyn_date(value: Date | undefined) {
        this._msdyn_date = value;
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
     * Gets the msdyn_end property value. 
     * @returns a Date
     */
    public get msdyn_end() {
        return this._msdyn_end;
    };
    /**
     * Sets the msdyn_end property value. 
     * @param value Value to set for the msdyn_end property.
     */
    public set msdyn_end(value: Date | undefined) {
        this._msdyn_end = value;
    };
    /**
     * Gets the msdyn_entrystatus property value. 
     * @returns a integer
     */
    public get msdyn_entrystatus() {
        return this._msdyn_entrystatus;
    };
    /**
     * Sets the msdyn_entrystatus property value. 
     * @param value Value to set for the msdyn_entrystatus property.
     */
    public set msdyn_entrystatus(value: number | undefined) {
        this._msdyn_entrystatus = value;
    };
    /**
     * Gets the msdyn_externaldescription property value. 
     * @returns a string
     */
    public get msdyn_externaldescription() {
        return this._msdyn_externaldescription;
    };
    /**
     * Sets the msdyn_externaldescription property value. 
     * @param value Value to set for the msdyn_externaldescription property.
     */
    public set msdyn_externaldescription(value: string | undefined) {
        this._msdyn_externaldescription = value;
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
     * Gets the msdyn_manager property value. 
     * @returns a systemuser
     */
    public get msdyn_manager() {
        return this._msdyn_manager;
    };
    /**
     * Sets the msdyn_manager property value. 
     * @param value Value to set for the msdyn_manager property.
     */
    public set msdyn_manager(value: Systemuser | undefined) {
        this._msdyn_manager = value;
    };
    /**
     * Gets the msdyn_msdyn_journal_msdyn_timeentry property value. 
     * @returns a msdyn_journal
     */
    public get msdyn_msdyn_journal_msdyn_timeentry() {
        return this._msdyn_msdyn_journal_msdyn_timeentry;
    };
    /**
     * Sets the msdyn_msdyn_journal_msdyn_timeentry property value. 
     * @param value Value to set for the msdyn_msdyn_journal_msdyn_timeentry property.
     */
    public set msdyn_msdyn_journal_msdyn_timeentry(value: Msdyn_journal[] | undefined) {
        this._msdyn_msdyn_journal_msdyn_timeentry = value;
    };
    /**
     * Gets the msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry() {
        return this._msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry;
    };
    /**
     * Sets the msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry property value. 
     * @param value Value to set for the msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry property.
     */
    public set msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry = value;
    };
    /**
     * Gets the msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry property value. 
     * @returns a msdyn_timeoffcalendar
     */
    public get msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry() {
        return this._msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry;
    };
    /**
     * Sets the msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry property value. 
     * @param value Value to set for the msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry property.
     */
    public set msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry(value: Msdyn_timeoffcalendar[] | undefined) {
        this._msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry = value;
    };
    /**
     * Gets the msdyn_project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_project() {
        return this._msdyn_project;
    };
    /**
     * Sets the msdyn_project property value. 
     * @param value Value to set for the msdyn_project property.
     */
    public set msdyn_project(value: Msdyn_project | undefined) {
        this._msdyn_project = value;
    };
    /**
     * Gets the msdyn_projectTask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_projectTask() {
        return this._msdyn_projectTask;
    };
    /**
     * Sets the msdyn_projectTask property value. 
     * @param value Value to set for the msdyn_projectTask property.
     */
    public set msdyn_projectTask(value: Msdyn_projecttask | undefined) {
        this._msdyn_projectTask = value;
    };
    /**
     * Gets the msdyn_relateditemid property value. 
     * @returns a string
     */
    public get msdyn_relateditemid() {
        return this._msdyn_relateditemid;
    };
    /**
     * Sets the msdyn_relateditemid property value. 
     * @param value Value to set for the msdyn_relateditemid property.
     */
    public set msdyn_relateditemid(value: string | undefined) {
        this._msdyn_relateditemid = value;
    };
    /**
     * Gets the msdyn_relateditemtype property value. 
     * @returns a integer
     */
    public get msdyn_relateditemtype() {
        return this._msdyn_relateditemtype;
    };
    /**
     * Sets the msdyn_relateditemtype property value. 
     * @param value Value to set for the msdyn_relateditemtype property.
     */
    public set msdyn_relateditemtype(value: number | undefined) {
        this._msdyn_relateditemtype = value;
    };
    /**
     * Gets the msdyn_resourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_resourceCategory() {
        return this._msdyn_resourceCategory;
    };
    /**
     * Sets the msdyn_resourceCategory property value. 
     * @param value Value to set for the msdyn_resourceCategory property.
     */
    public set msdyn_resourceCategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_resourceCategory = value;
    };
    /**
     * Gets the msdyn_ResourceOrganizationalUnitId property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_ResourceOrganizationalUnitId() {
        return this._msdyn_ResourceOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_ResourceOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_ResourceOrganizationalUnitId property.
     */
    public set msdyn_ResourceOrganizationalUnitId(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_ResourceOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_start property value. 
     * @returns a Date
     */
    public get msdyn_start() {
        return this._msdyn_start;
    };
    /**
     * Sets the msdyn_start property value. 
     * @param value Value to set for the msdyn_start property.
     */
    public set msdyn_start(value: Date | undefined) {
        this._msdyn_start = value;
    };
    /**
     * Gets the msdyn_targetentrystatus property value. 
     * @returns a integer
     */
    public get msdyn_targetentrystatus() {
        return this._msdyn_targetentrystatus;
    };
    /**
     * Sets the msdyn_targetentrystatus property value. 
     * @param value Value to set for the msdyn_targetentrystatus property.
     */
    public set msdyn_targetentrystatus(value: number | undefined) {
        this._msdyn_targetentrystatus = value;
    };
    /**
     * Gets the msdyn_timeentry_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_timeentry_Annotations() {
        return this._msdyn_timeentry_Annotations;
    };
    /**
     * Sets the msdyn_timeentry_Annotations property value. 
     * @param value Value to set for the msdyn_timeentry_Annotations property.
     */
    public set msdyn_timeentry_Annotations(value: Annotation[] | undefined) {
        this._msdyn_timeentry_Annotations = value;
    };
    /**
     * Gets the msdyn_timeentry_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_timeentry_AsyncOperations() {
        return this._msdyn_timeentry_AsyncOperations;
    };
    /**
     * Sets the msdyn_timeentry_AsyncOperations property value. 
     * @param value Value to set for the msdyn_timeentry_AsyncOperations property.
     */
    public set msdyn_timeentry_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_timeentry_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_timeentry_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_timeentry_BulkDeleteFailures() {
        return this._msdyn_timeentry_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_timeentry_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_timeentry_BulkDeleteFailures property.
     */
    public set msdyn_timeentry_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_timeentry_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_timeentry_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_timeentry_MailboxTrackingFolders() {
        return this._msdyn_timeentry_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_timeentry_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_timeentry_MailboxTrackingFolders property.
     */
    public set msdyn_timeentry_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_timeentry_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_timeentry_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_timeentry_PrincipalObjectAttributeAccesses() {
        return this._msdyn_timeentry_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_timeentry_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_timeentry_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_timeentry_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_timeentry_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_timeentry_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_timeentry_ProcessSession() {
        return this._msdyn_timeentry_ProcessSession;
    };
    /**
     * Sets the msdyn_timeentry_ProcessSession property value. 
     * @param value Value to set for the msdyn_timeentry_ProcessSession property.
     */
    public set msdyn_timeentry_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_timeentry_ProcessSession = value;
    };
    /**
     * Gets the msdyn_timeentry_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_timeentry_SyncErrors() {
        return this._msdyn_timeentry_SyncErrors;
    };
    /**
     * Sets the msdyn_timeentry_SyncErrors property value. 
     * @param value Value to set for the msdyn_timeentry_SyncErrors property.
     */
    public set msdyn_timeentry_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_timeentry_SyncErrors = value;
    };
    /**
     * Gets the msdyn_timeentryid property value. 
     * @returns a string
     */
    public get msdyn_timeentryid() {
        return this._msdyn_timeentryid;
    };
    /**
     * Sets the msdyn_timeentryid property value. 
     * @param value Value to set for the msdyn_timeentryid property.
     */
    public set msdyn_timeentryid(value: string | undefined) {
        this._msdyn_timeentryid = value;
    };
    /**
     * Gets the msdyn_timeentrysettingId property value. 
     * @returns a msdyn_timeentrysetting
     */
    public get msdyn_timeentrysettingId() {
        return this._msdyn_timeentrysettingId;
    };
    /**
     * Sets the msdyn_timeentrysettingId property value. 
     * @param value Value to set for the msdyn_timeentrysettingId property.
     */
    public set msdyn_timeentrysettingId(value: Msdyn_timeentrysetting | undefined) {
        this._msdyn_timeentrysettingId = value;
    };
    /**
     * Gets the msdyn_timeoffrequest property value. 
     * @returns a msdyn_timeoffrequest
     */
    public get msdyn_timeoffrequest() {
        return this._msdyn_timeoffrequest;
    };
    /**
     * Sets the msdyn_timeoffrequest property value. 
     * @param value Value to set for the msdyn_timeoffrequest property.
     */
    public set msdyn_timeoffrequest(value: Msdyn_timeoffrequest | undefined) {
        this._msdyn_timeoffrequest = value;
    };
    /**
     * Gets the msdyn_transactioncategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_transactioncategory() {
        return this._msdyn_transactioncategory;
    };
    /**
     * Sets the msdyn_transactioncategory property value. 
     * @param value Value to set for the msdyn_transactioncategory property.
     */
    public set msdyn_transactioncategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_transactioncategory = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_WorkOrder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_WorkOrder() {
        return this._msdyn_WorkOrder;
    };
    /**
     * Sets the msdyn_WorkOrder property value. 
     * @param value Value to set for the msdyn_WorkOrder property.
     */
    public set msdyn_WorkOrder(value: Msdyn_workorder | undefined) {
        this._msdyn_WorkOrder = value;
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
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_bookableresourcebooking_value", this._msdyn_bookableresourcebooking_value);
        writer.writeStringValue("_msdyn_bookingstatus_value", this._msdyn_bookingstatus_value);
        writer.writeStringValue("_msdyn_manager_value", this._msdyn_manager_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_projecttask_value", this._msdyn_projecttask_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_resourceorganizationalunitid_value", this._msdyn_resourceorganizationalunitid_value);
        writer.writeStringValue("_msdyn_timeentrysettingid_value", this._msdyn_timeentrysettingid_value);
        writer.writeStringValue("_msdyn_timeoffrequest_value", this._msdyn_timeoffrequest_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_BookableResourceBooking", this.msdyn_BookableResourceBooking);
        writer.writeObjectValue<Bookingstatus>("msdyn_BookingStatus", this.msdyn_BookingStatus);
        writer.writeDateValue("msdyn_date", this.msdyn_date);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeDateValue("msdyn_end", this.msdyn_end);
        writer.writeNumberValue("msdyn_entrystatus", this.msdyn_entrystatus);
        writer.writeStringValue("msdyn_externaldescription", this.msdyn_externaldescription);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeObjectValue<Systemuser>("msdyn_manager", this.msdyn_manager);
        writer.writeCollectionOfObjectValues<Msdyn_journal>("msdyn_msdyn_journal_msdyn_timeentry", this.msdyn_msdyn_journal_msdyn_timeentry);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry", this.msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry);
        writer.writeCollectionOfObjectValues<Msdyn_timeoffcalendar>("msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry", this.msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry);
        writer.writeObjectValue<Msdyn_project>("msdyn_project", this.msdyn_project);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_projectTask", this.msdyn_projectTask);
        writer.writeStringValue("msdyn_relateditemid", this.msdyn_relateditemid);
        writer.writeNumberValue("msdyn_relateditemtype", this.msdyn_relateditemtype);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_resourceCategory", this.msdyn_resourceCategory);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_ResourceOrganizationalUnitId", this.msdyn_ResourceOrganizationalUnitId);
        writer.writeDateValue("msdyn_start", this.msdyn_start);
        writer.writeNumberValue("msdyn_targetentrystatus", this.msdyn_targetentrystatus);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_timeentry_Annotations", this.msdyn_timeentry_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_timeentry_AsyncOperations", this.msdyn_timeentry_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_timeentry_BulkDeleteFailures", this.msdyn_timeentry_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_timeentry_MailboxTrackingFolders", this.msdyn_timeentry_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_timeentry_PrincipalObjectAttributeAccesses", this.msdyn_timeentry_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_timeentry_ProcessSession", this.msdyn_timeentry_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_timeentry_SyncErrors", this.msdyn_timeentry_SyncErrors);
        writer.writeStringValue("msdyn_timeentryid", this.msdyn_timeentryid);
        writer.writeObjectValue<Msdyn_timeentrysetting>("msdyn_timeentrysettingId", this.msdyn_timeentrysettingId);
        writer.writeObjectValue<Msdyn_timeoffrequest>("msdyn_timeoffrequest", this.msdyn_timeoffrequest);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_transactioncategory", this.msdyn_transactioncategory);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_WorkOrder", this.msdyn_WorkOrder);
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
