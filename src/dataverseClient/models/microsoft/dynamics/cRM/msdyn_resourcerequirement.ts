import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_bookingsetupmetadataFromDiscriminatorValue} from './createMsdyn_bookingsetupmetadataFromDiscriminatorValue';
import {createMsdyn_characteristicreqforteammemberFromDiscriminatorValue} from './createMsdyn_characteristicreqforteammemberFromDiscriminatorValue';
import {createMsdyn_priorityFromDiscriminatorValue} from './createMsdyn_priorityFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_requirementcharacteristicFromDiscriminatorValue} from './createMsdyn_requirementcharacteristicFromDiscriminatorValue';
import {createMsdyn_requirementdependencyFromDiscriminatorValue} from './createMsdyn_requirementdependencyFromDiscriminatorValue';
import {createMsdyn_requirementgroupFromDiscriminatorValue} from './createMsdyn_requirementgroupFromDiscriminatorValue';
import {createMsdyn_requirementorganizationunitFromDiscriminatorValue} from './createMsdyn_requirementorganizationunitFromDiscriminatorValue';
import {createMsdyn_requirementrelationshipFromDiscriminatorValue} from './createMsdyn_requirementrelationshipFromDiscriminatorValue';
import {createMsdyn_requirementresourcecategoryFromDiscriminatorValue} from './createMsdyn_requirementresourcecategoryFromDiscriminatorValue';
import {createMsdyn_requirementresourcepreferenceFromDiscriminatorValue} from './createMsdyn_requirementresourcepreferenceFromDiscriminatorValue';
import {createMsdyn_requirementstatusFromDiscriminatorValue} from './createMsdyn_requirementstatusFromDiscriminatorValue';
import {createMsdyn_resourcerequestFromDiscriminatorValue} from './createMsdyn_resourcerequestFromDiscriminatorValue';
import {createMsdyn_resourcerequirementdetailFromDiscriminatorValue} from './createMsdyn_resourcerequirementdetailFromDiscriminatorValue';
import {createMsdyn_timegroupFromDiscriminatorValue} from './createMsdyn_timegroupFromDiscriminatorValue';
import {createMsdyn_workhourtemplateFromDiscriminatorValue} from './createMsdyn_workhourtemplateFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderincidentFromDiscriminatorValue} from './createMsdyn_workorderincidentFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTerritoryFromDiscriminatorValue} from './createTerritoryFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Appointment, Asyncoperation, Bookableresource, Bookableresourcebooking, Bookableresourcebookingheader, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_bookingsetupmetadata, Msdyn_characteristicreqforteammember, Msdyn_priority, Msdyn_project, Msdyn_projectteam, Msdyn_requirementcharacteristic, Msdyn_requirementdependency, Msdyn_requirementgroup, Msdyn_requirementorganizationunit, Msdyn_requirementrelationship, Msdyn_requirementresourcecategory, Msdyn_requirementresourcepreference, Msdyn_requirementstatus, Msdyn_resourcerequest, Msdyn_resourcerequirementdetail, Msdyn_timegroup, Msdyn_workhourtemplate, Msdyn_workorder, Msdyn_workorderincident, Principal, Principalobjectattributeaccess, Processsession, Serviceappointment, Syncerror, Systemuser, Team, Territory, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_resourcerequirement extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_appointmentrequirementid_value?: string | undefined;
    private __msdyn_bookingsetupmetadataid_value?: string | undefined;
    private __msdyn_priority_value?: string | undefined;
    private __msdyn_projectid_value?: string | undefined;
    private __msdyn_requirementgroupid_value?: string | undefined;
    private __msdyn_requirementrelationshipid_value?: string | undefined;
    private __msdyn_roleid_value?: string | undefined;
    private __msdyn_serviceappointment_value?: string | undefined;
    private __msdyn_status_value?: string | undefined;
    private __msdyn_territory_value?: string | undefined;
    private __msdyn_timegroup_value?: string | undefined;
    private __msdyn_workhourtemplate_value?: string | undefined;
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
    private _msdyn_allocationmethod?: number | undefined;
    private _msdyn_AppointmentRequirementId?: Appointment | undefined;
    private _msdyn_BookingSetupMetadataId?: Msdyn_bookingsetupmetadata | undefined;
    private _msdyn_calendarid?: string | undefined;
    private _msdyn_city?: string | undefined;
    private _msdyn_costprice?: number | undefined;
    private _msdyn_costprice_base?: number | undefined;
    private _msdyn_country?: string | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_effort?: number | undefined;
    private _msdyn_fromdate?: Date | undefined;
    private _msdyn_fulfilledduration?: number | undefined;
    private _msdyn_fulfilledhours?: number | undefined;
    private _msdyn_hours?: number | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_isprimary?: boolean | undefined;
    private _msdyn_istemplate?: boolean | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse?: Msdyn_requirementcharacteristic[] | undefined;
    private _msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement?: Msdyn_workorderincident[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_percentage?: number | undefined;
    private _msdyn_pooltype?: string | undefined;
    private _msdyn_Priority?: Msdyn_priority | undefined;
    private _msdyn_projectid?: Msdyn_project | undefined;
    private _msdyn_proposedduration?: number | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_remainingduration?: number | undefined;
    private _msdyn_requeststatus?: string | undefined;
    private _msdyn_requirementgroupcontrolviewid?: string | undefined;
    private _msdyn_requirementgroupid?: Msdyn_requirementgroup | undefined;
    private _msdyn_requirementrelationshipid?: Msdyn_requirementrelationship | undefined;
    private _msdyn_resourcerequirement_Annotations?: Annotation[] | undefined;
    private _msdyn_resourcerequirement_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_resourcerequirement_bookableresource?: Bookableresource[] | undefined;
    private _msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement?: Bookableresourcebooking[] | undefined;
    private _msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement?: Bookableresourcebookingheader[] | undefined;
    private _msdyn_resourcerequirement_bookingheader?: Bookableresourcebookingheader[] | undefined;
    private _msdyn_resourcerequirement_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_resourcerequirement_characteristicreq?: Msdyn_characteristicreqforteammember[] | undefined;
    private _msdyn_resourcerequirement_details?: Msdyn_resourcerequirementdetail[] | undefined;
    private _msdyn_resourcerequirement_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcerequirement_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcerequirement_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_resourcerequirement_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_resourcerequirement_ProcessSession?: Processsession[] | undefined;
    private _msdyn_resourcerequirement_projectteam?: Msdyn_projectteam[] | undefined;
    private _msdyn_resourcerequirement_request?: Msdyn_resourcerequest[] | undefined;
    private _msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement?: Msdyn_requirementcharacteristic[] | undefined;
    private _msdyn_resourcerequirement_requirementdependency_dependentrequirement?: Msdyn_requirementdependency[] | undefined;
    private _msdyn_resourcerequirement_requirementdependency_resourcerequirement?: Msdyn_requirementdependency[] | undefined;
    private _msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement?: Msdyn_requirementorganizationunit[] | undefined;
    private _msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement?: Msdyn_requirementresourcecategory[] | undefined;
    private _msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement?: Msdyn_requirementresourcepreference[] | undefined;
    private _msdyn_resourcerequirement_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_resourcerequirement_systemuser?: Systemuser[] | undefined;
    private _msdyn_resourcerequirementid?: string | undefined;
    private _msdyn_resourcetype?: string | undefined;
    private _msdyn_roleid?: Bookableresourcecategory | undefined;
    private _msdyn_serviceappointment?: Serviceappointment | undefined;
    private _msdyn_sortoptions?: string | undefined;
    private _msdyn_stateorprovince?: string | undefined;
    private _msdyn_Status?: Msdyn_requirementstatus | undefined;
    private _msdyn_templaterequirementid?: string | undefined;
    private _msdyn_Territory?: Territory | undefined;
    private _msdyn_timefrompromised?: Date | undefined;
    private _msdyn_TimeGroup?: Msdyn_timegroup | undefined;
    private _msdyn_timetopromised?: Date | undefined;
    private _msdyn_timewindowend?: Date | undefined;
    private _msdyn_timewindowstart?: Date | undefined;
    private _msdyn_timezonefortimewindow?: number | undefined;
    private _msdyn_todate?: Date | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_workhourtemplate?: Msdyn_workhourtemplate | undefined;
    private _msdyn_worklocation?: number | undefined;
    private _msdyn_WorkOrder?: Msdyn_workorder | undefined;
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
     * Gets the _msdyn_appointmentrequirementid_value property value. 
     * @returns a string
     */
    public get _msdyn_appointmentrequirementid_value() {
        return this.__msdyn_appointmentrequirementid_value;
    };
    /**
     * Sets the _msdyn_appointmentrequirementid_value property value. 
     * @param value Value to set for the _msdyn_appointmentrequirementid_value property.
     */
    public set _msdyn_appointmentrequirementid_value(value: string | undefined) {
        this.__msdyn_appointmentrequirementid_value = value;
    };
    /**
     * Gets the _msdyn_bookingsetupmetadataid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookingsetupmetadataid_value() {
        return this.__msdyn_bookingsetupmetadataid_value;
    };
    /**
     * Sets the _msdyn_bookingsetupmetadataid_value property value. 
     * @param value Value to set for the _msdyn_bookingsetupmetadataid_value property.
     */
    public set _msdyn_bookingsetupmetadataid_value(value: string | undefined) {
        this.__msdyn_bookingsetupmetadataid_value = value;
    };
    /**
     * Gets the _msdyn_priority_value property value. 
     * @returns a string
     */
    public get _msdyn_priority_value() {
        return this.__msdyn_priority_value;
    };
    /**
     * Sets the _msdyn_priority_value property value. 
     * @param value Value to set for the _msdyn_priority_value property.
     */
    public set _msdyn_priority_value(value: string | undefined) {
        this.__msdyn_priority_value = value;
    };
    /**
     * Gets the _msdyn_projectid_value property value. 
     * @returns a string
     */
    public get _msdyn_projectid_value() {
        return this.__msdyn_projectid_value;
    };
    /**
     * Sets the _msdyn_projectid_value property value. 
     * @param value Value to set for the _msdyn_projectid_value property.
     */
    public set _msdyn_projectid_value(value: string | undefined) {
        this.__msdyn_projectid_value = value;
    };
    /**
     * Gets the _msdyn_requirementgroupid_value property value. 
     * @returns a string
     */
    public get _msdyn_requirementgroupid_value() {
        return this.__msdyn_requirementgroupid_value;
    };
    /**
     * Sets the _msdyn_requirementgroupid_value property value. 
     * @param value Value to set for the _msdyn_requirementgroupid_value property.
     */
    public set _msdyn_requirementgroupid_value(value: string | undefined) {
        this.__msdyn_requirementgroupid_value = value;
    };
    /**
     * Gets the _msdyn_requirementrelationshipid_value property value. 
     * @returns a string
     */
    public get _msdyn_requirementrelationshipid_value() {
        return this.__msdyn_requirementrelationshipid_value;
    };
    /**
     * Sets the _msdyn_requirementrelationshipid_value property value. 
     * @param value Value to set for the _msdyn_requirementrelationshipid_value property.
     */
    public set _msdyn_requirementrelationshipid_value(value: string | undefined) {
        this.__msdyn_requirementrelationshipid_value = value;
    };
    /**
     * Gets the _msdyn_roleid_value property value. 
     * @returns a string
     */
    public get _msdyn_roleid_value() {
        return this.__msdyn_roleid_value;
    };
    /**
     * Sets the _msdyn_roleid_value property value. 
     * @param value Value to set for the _msdyn_roleid_value property.
     */
    public set _msdyn_roleid_value(value: string | undefined) {
        this.__msdyn_roleid_value = value;
    };
    /**
     * Gets the _msdyn_serviceappointment_value property value. 
     * @returns a string
     */
    public get _msdyn_serviceappointment_value() {
        return this.__msdyn_serviceappointment_value;
    };
    /**
     * Sets the _msdyn_serviceappointment_value property value. 
     * @param value Value to set for the _msdyn_serviceappointment_value property.
     */
    public set _msdyn_serviceappointment_value(value: string | undefined) {
        this.__msdyn_serviceappointment_value = value;
    };
    /**
     * Gets the _msdyn_status_value property value. 
     * @returns a string
     */
    public get _msdyn_status_value() {
        return this.__msdyn_status_value;
    };
    /**
     * Sets the _msdyn_status_value property value. 
     * @param value Value to set for the _msdyn_status_value property.
     */
    public set _msdyn_status_value(value: string | undefined) {
        this.__msdyn_status_value = value;
    };
    /**
     * Gets the _msdyn_territory_value property value. 
     * @returns a string
     */
    public get _msdyn_territory_value() {
        return this.__msdyn_territory_value;
    };
    /**
     * Sets the _msdyn_territory_value property value. 
     * @param value Value to set for the _msdyn_territory_value property.
     */
    public set _msdyn_territory_value(value: string | undefined) {
        this.__msdyn_territory_value = value;
    };
    /**
     * Gets the _msdyn_timegroup_value property value. 
     * @returns a string
     */
    public get _msdyn_timegroup_value() {
        return this.__msdyn_timegroup_value;
    };
    /**
     * Sets the _msdyn_timegroup_value property value. 
     * @param value Value to set for the _msdyn_timegroup_value property.
     */
    public set _msdyn_timegroup_value(value: string | undefined) {
        this.__msdyn_timegroup_value = value;
    };
    /**
     * Gets the _msdyn_workhourtemplate_value property value. 
     * @returns a string
     */
    public get _msdyn_workhourtemplate_value() {
        return this.__msdyn_workhourtemplate_value;
    };
    /**
     * Sets the _msdyn_workhourtemplate_value property value. 
     * @param value Value to set for the _msdyn_workhourtemplate_value property.
     */
    public set _msdyn_workhourtemplate_value(value: string | undefined) {
        this.__msdyn_workhourtemplate_value = value;
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
     * Instantiates a new msdyn_resourcerequirement and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_appointmentrequirementid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_appointmentrequirementid_value = n.getStringValue(); },
            "_msdyn_bookingsetupmetadataid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_bookingsetupmetadataid_value = n.getStringValue(); },
            "_msdyn_priority_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_priority_value = n.getStringValue(); },
            "_msdyn_projectid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_projectid_value = n.getStringValue(); },
            "_msdyn_requirementgroupid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_requirementgroupid_value = n.getStringValue(); },
            "_msdyn_requirementrelationshipid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_requirementrelationshipid_value = n.getStringValue(); },
            "_msdyn_roleid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_roleid_value = n.getStringValue(); },
            "_msdyn_serviceappointment_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_serviceappointment_value = n.getStringValue(); },
            "_msdyn_status_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_status_value = n.getStringValue(); },
            "_msdyn_territory_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_territory_value = n.getStringValue(); },
            "_msdyn_timegroup_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_timegroup_value = n.getStringValue(); },
            "_msdyn_workhourtemplate_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_workhourtemplate_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._msdyn_workorder_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_resourcerequirement)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_resourcerequirement).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_resourcerequirement).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcerequirement).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_resourcerequirement).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_resourcerequirement).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_resourcerequirement).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_resourcerequirement).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcerequirement).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_allocationmethod": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_allocationmethod = n.getNumberValue(); },
            "msdyn_AppointmentRequirementId": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_AppointmentRequirementId = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_BookingSetupMetadataId": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_BookingSetupMetadataId = n.getObjectValue<Msdyn_bookingsetupmetadata>(createMsdyn_bookingsetupmetadataFromDiscriminatorValue); },
            "msdyn_calendarid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_calendarid = n.getStringValue(); },
            "msdyn_city": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_city = n.getStringValue(); },
            "msdyn_costprice": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_costprice = n.getNumberValue(); },
            "msdyn_costprice_base": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_costprice_base = n.getNumberValue(); },
            "msdyn_country": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_country = n.getStringValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_duration = n.getNumberValue(); },
            "msdyn_effort": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_effort = n.getNumberValue(); },
            "msdyn_fromdate": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_fromdate = n.getDateValue(); },
            "msdyn_fulfilledduration": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_fulfilledduration = n.getNumberValue(); },
            "msdyn_fulfilledhours": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_fulfilledhours = n.getNumberValue(); },
            "msdyn_hours": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_hours = n.getNumberValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_internalflags = n.getStringValue(); },
            "msdyn_isprimary": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_isprimary = n.getBooleanValue(); },
            "msdyn_istemplate": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_istemplate = n.getBooleanValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_longitude = n.getNumberValue(); },
            "msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse = n.getCollectionOfObjectValues<Msdyn_requirementcharacteristic>(createMsdyn_requirementcharacteristicFromDiscriminatorValue); },
            "msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement = n.getCollectionOfObjectValues<Msdyn_workorderincident>(createMsdyn_workorderincidentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_name = n.getStringValue(); },
            "msdyn_percentage": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_percentage = n.getNumberValue(); },
            "msdyn_pooltype": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_pooltype = n.getStringValue(); },
            "msdyn_Priority": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_Priority = n.getObjectValue<Msdyn_priority>(createMsdyn_priorityFromDiscriminatorValue); },
            "msdyn_projectid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_projectid = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_proposedduration": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_proposedduration = n.getNumberValue(); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_quantity = n.getNumberValue(); },
            "msdyn_remainingduration": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_remainingduration = n.getNumberValue(); },
            "msdyn_requeststatus": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_requeststatus = n.getStringValue(); },
            "msdyn_requirementgroupcontrolviewid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_requirementgroupcontrolviewid = n.getStringValue(); },
            "msdyn_requirementgroupid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_requirementgroupid = n.getObjectValue<Msdyn_requirementgroup>(createMsdyn_requirementgroupFromDiscriminatorValue); },
            "msdyn_requirementrelationshipid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_requirementrelationshipid = n.getObjectValue<Msdyn_requirementrelationship>(createMsdyn_requirementrelationshipFromDiscriminatorValue); },
            "msdyn_resourcerequirement_Annotations": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_resourcerequirement_AsyncOperations": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_resourcerequirement_bookableresource": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_bookableresource = n.getCollectionOfObjectValues<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement = n.getCollectionOfObjectValues<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "msdyn_resourcerequirement_bookingheader": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_bookingheader = n.getCollectionOfObjectValues<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "msdyn_resourcerequirement_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_resourcerequirement_characteristicreq": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_characteristicreq = n.getCollectionOfObjectValues<Msdyn_characteristicreqforteammember>(createMsdyn_characteristicreqforteammemberFromDiscriminatorValue); },
            "msdyn_resourcerequirement_details": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_details = n.getCollectionOfObjectValues<Msdyn_resourcerequirementdetail>(createMsdyn_resourcerequirementdetailFromDiscriminatorValue); },
            "msdyn_resourcerequirement_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcerequirement_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcerequirement_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_resourcerequirement_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_resourcerequirement_ProcessSession": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_resourcerequirement_projectteam": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_projectteam = n.getCollectionOfObjectValues<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_resourcerequirement_request": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_request = n.getCollectionOfObjectValues<Msdyn_resourcerequest>(createMsdyn_resourcerequestFromDiscriminatorValue); },
            "msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement = n.getCollectionOfObjectValues<Msdyn_requirementcharacteristic>(createMsdyn_requirementcharacteristicFromDiscriminatorValue); },
            "msdyn_resourcerequirement_requirementdependency_dependentrequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_requirementdependency_dependentrequirement = n.getCollectionOfObjectValues<Msdyn_requirementdependency>(createMsdyn_requirementdependencyFromDiscriminatorValue); },
            "msdyn_resourcerequirement_requirementdependency_resourcerequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_requirementdependency_resourcerequirement = n.getCollectionOfObjectValues<Msdyn_requirementdependency>(createMsdyn_requirementdependencyFromDiscriminatorValue); },
            "msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement = n.getCollectionOfObjectValues<Msdyn_requirementorganizationunit>(createMsdyn_requirementorganizationunitFromDiscriminatorValue); },
            "msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement = n.getCollectionOfObjectValues<Msdyn_requirementresourcecategory>(createMsdyn_requirementresourcecategoryFromDiscriminatorValue); },
            "msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement = n.getCollectionOfObjectValues<Msdyn_requirementresourcepreference>(createMsdyn_requirementresourcepreferenceFromDiscriminatorValue); },
            "msdyn_resourcerequirement_SyncErrors": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_resourcerequirement_systemuser": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirement_systemuser = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_resourcerequirementid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcerequirementid = n.getStringValue(); },
            "msdyn_resourcetype": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_resourcetype = n.getStringValue(); },
            "msdyn_roleid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_roleid = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_serviceappointment": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_serviceappointment = n.getObjectValue<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_sortoptions": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_sortoptions = n.getStringValue(); },
            "msdyn_stateorprovince": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_stateorprovince = n.getStringValue(); },
            "msdyn_Status": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_Status = n.getObjectValue<Msdyn_requirementstatus>(createMsdyn_requirementstatusFromDiscriminatorValue); },
            "msdyn_templaterequirementid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_templaterequirementid = n.getStringValue(); },
            "msdyn_Territory": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_Territory = n.getObjectValue<Territory>(createTerritoryFromDiscriminatorValue); },
            "msdyn_timefrompromised": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_timefrompromised = n.getDateValue(); },
            "msdyn_TimeGroup": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_TimeGroup = n.getObjectValue<Msdyn_timegroup>(createMsdyn_timegroupFromDiscriminatorValue); },
            "msdyn_timetopromised": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_timetopromised = n.getDateValue(); },
            "msdyn_timewindowend": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_timewindowend = n.getDateValue(); },
            "msdyn_timewindowstart": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_timewindowstart = n.getDateValue(); },
            "msdyn_timezonefortimewindow": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_timezonefortimewindow = n.getNumberValue(); },
            "msdyn_todate": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_todate = n.getDateValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_type = n.getNumberValue(); },
            "msdyn_workhourtemplate": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_workhourtemplate = n.getObjectValue<Msdyn_workhourtemplate>(createMsdyn_workhourtemplateFromDiscriminatorValue); },
            "msdyn_worklocation": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_worklocation = n.getNumberValue(); },
            "msdyn_WorkOrder": (o, n) => { (o as unknown as Msdyn_resourcerequirement).msdyn_WorkOrder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_resourcerequirement).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_resourcerequirement).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_resourcerequirement).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_resourcerequirement).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_resourcerequirement).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_resourcerequirement).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_resourcerequirement).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_resourcerequirement).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_resourcerequirement).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_resourcerequirement).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_allocationmethod property value. 
     * @returns a integer
     */
    public get msdyn_allocationmethod() {
        return this._msdyn_allocationmethod;
    };
    /**
     * Sets the msdyn_allocationmethod property value. 
     * @param value Value to set for the msdyn_allocationmethod property.
     */
    public set msdyn_allocationmethod(value: number | undefined) {
        this._msdyn_allocationmethod = value;
    };
    /**
     * Gets the msdyn_AppointmentRequirementId property value. 
     * @returns a appointment
     */
    public get msdyn_AppointmentRequirementId() {
        return this._msdyn_AppointmentRequirementId;
    };
    /**
     * Sets the msdyn_AppointmentRequirementId property value. 
     * @param value Value to set for the msdyn_AppointmentRequirementId property.
     */
    public set msdyn_AppointmentRequirementId(value: Appointment | undefined) {
        this._msdyn_AppointmentRequirementId = value;
    };
    /**
     * Gets the msdyn_BookingSetupMetadataId property value. 
     * @returns a msdyn_bookingsetupmetadata
     */
    public get msdyn_BookingSetupMetadataId() {
        return this._msdyn_BookingSetupMetadataId;
    };
    /**
     * Sets the msdyn_BookingSetupMetadataId property value. 
     * @param value Value to set for the msdyn_BookingSetupMetadataId property.
     */
    public set msdyn_BookingSetupMetadataId(value: Msdyn_bookingsetupmetadata | undefined) {
        this._msdyn_BookingSetupMetadataId = value;
    };
    /**
     * Gets the msdyn_calendarid property value. 
     * @returns a string
     */
    public get msdyn_calendarid() {
        return this._msdyn_calendarid;
    };
    /**
     * Sets the msdyn_calendarid property value. 
     * @param value Value to set for the msdyn_calendarid property.
     */
    public set msdyn_calendarid(value: string | undefined) {
        this._msdyn_calendarid = value;
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
     * Gets the msdyn_costprice property value. 
     * @returns a int64
     */
    public get msdyn_costprice() {
        return this._msdyn_costprice;
    };
    /**
     * Sets the msdyn_costprice property value. 
     * @param value Value to set for the msdyn_costprice property.
     */
    public set msdyn_costprice(value: number | undefined) {
        this._msdyn_costprice = value;
    };
    /**
     * Gets the msdyn_costprice_base property value. 
     * @returns a int64
     */
    public get msdyn_costprice_base() {
        return this._msdyn_costprice_base;
    };
    /**
     * Sets the msdyn_costprice_base property value. 
     * @param value Value to set for the msdyn_costprice_base property.
     */
    public set msdyn_costprice_base(value: number | undefined) {
        this._msdyn_costprice_base = value;
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
     * Gets the msdyn_effort property value. 
     * @returns a int64
     */
    public get msdyn_effort() {
        return this._msdyn_effort;
    };
    /**
     * Sets the msdyn_effort property value. 
     * @param value Value to set for the msdyn_effort property.
     */
    public set msdyn_effort(value: number | undefined) {
        this._msdyn_effort = value;
    };
    /**
     * Gets the msdyn_fromdate property value. 
     * @returns a Date
     */
    public get msdyn_fromdate() {
        return this._msdyn_fromdate;
    };
    /**
     * Sets the msdyn_fromdate property value. 
     * @param value Value to set for the msdyn_fromdate property.
     */
    public set msdyn_fromdate(value: Date | undefined) {
        this._msdyn_fromdate = value;
    };
    /**
     * Gets the msdyn_fulfilledduration property value. 
     * @returns a integer
     */
    public get msdyn_fulfilledduration() {
        return this._msdyn_fulfilledduration;
    };
    /**
     * Sets the msdyn_fulfilledduration property value. 
     * @param value Value to set for the msdyn_fulfilledduration property.
     */
    public set msdyn_fulfilledduration(value: number | undefined) {
        this._msdyn_fulfilledduration = value;
    };
    /**
     * Gets the msdyn_fulfilledhours property value. 
     * @returns a int64
     */
    public get msdyn_fulfilledhours() {
        return this._msdyn_fulfilledhours;
    };
    /**
     * Sets the msdyn_fulfilledhours property value. 
     * @param value Value to set for the msdyn_fulfilledhours property.
     */
    public set msdyn_fulfilledhours(value: number | undefined) {
        this._msdyn_fulfilledhours = value;
    };
    /**
     * Gets the msdyn_hours property value. 
     * @returns a int64
     */
    public get msdyn_hours() {
        return this._msdyn_hours;
    };
    /**
     * Sets the msdyn_hours property value. 
     * @param value Value to set for the msdyn_hours property.
     */
    public set msdyn_hours(value: number | undefined) {
        this._msdyn_hours = value;
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
     * Gets the msdyn_istemplate property value. 
     * @returns a boolean
     */
    public get msdyn_istemplate() {
        return this._msdyn_istemplate;
    };
    /**
     * Sets the msdyn_istemplate property value. 
     * @param value Value to set for the msdyn_istemplate property.
     */
    public set msdyn_istemplate(value: boolean | undefined) {
        this._msdyn_istemplate = value;
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
     * Gets the msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse property value. 
     * @returns a msdyn_requirementcharacteristic
     */
    public get msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse() {
        return this._msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse;
    };
    /**
     * Sets the msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse property value. 
     * @param value Value to set for the msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse property.
     */
    public set msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse(value: Msdyn_requirementcharacteristic[] | undefined) {
        this._msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse = value;
    };
    /**
     * Gets the msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement property value. 
     * @returns a msdyn_workorderincident
     */
    public get msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement() {
        return this._msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement;
    };
    /**
     * Sets the msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement property.
     */
    public set msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement(value: Msdyn_workorderincident[] | undefined) {
        this._msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement = value;
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
     * Gets the msdyn_percentage property value. 
     * @returns a int64
     */
    public get msdyn_percentage() {
        return this._msdyn_percentage;
    };
    /**
     * Sets the msdyn_percentage property value. 
     * @param value Value to set for the msdyn_percentage property.
     */
    public set msdyn_percentage(value: number | undefined) {
        this._msdyn_percentage = value;
    };
    /**
     * Gets the msdyn_pooltype property value. 
     * @returns a string
     */
    public get msdyn_pooltype() {
        return this._msdyn_pooltype;
    };
    /**
     * Sets the msdyn_pooltype property value. 
     * @param value Value to set for the msdyn_pooltype property.
     */
    public set msdyn_pooltype(value: string | undefined) {
        this._msdyn_pooltype = value;
    };
    /**
     * Gets the msdyn_Priority property value. 
     * @returns a msdyn_priority
     */
    public get msdyn_Priority() {
        return this._msdyn_Priority;
    };
    /**
     * Sets the msdyn_Priority property value. 
     * @param value Value to set for the msdyn_Priority property.
     */
    public set msdyn_Priority(value: Msdyn_priority | undefined) {
        this._msdyn_Priority = value;
    };
    /**
     * Gets the msdyn_projectid property value. 
     * @returns a msdyn_project
     */
    public get msdyn_projectid() {
        return this._msdyn_projectid;
    };
    /**
     * Sets the msdyn_projectid property value. 
     * @param value Value to set for the msdyn_projectid property.
     */
    public set msdyn_projectid(value: Msdyn_project | undefined) {
        this._msdyn_projectid = value;
    };
    /**
     * Gets the msdyn_proposedduration property value. 
     * @returns a integer
     */
    public get msdyn_proposedduration() {
        return this._msdyn_proposedduration;
    };
    /**
     * Sets the msdyn_proposedduration property value. 
     * @param value Value to set for the msdyn_proposedduration property.
     */
    public set msdyn_proposedduration(value: number | undefined) {
        this._msdyn_proposedduration = value;
    };
    /**
     * Gets the msdyn_quantity property value. 
     * @returns a int64
     */
    public get msdyn_quantity() {
        return this._msdyn_quantity;
    };
    /**
     * Sets the msdyn_quantity property value. 
     * @param value Value to set for the msdyn_quantity property.
     */
    public set msdyn_quantity(value: number | undefined) {
        this._msdyn_quantity = value;
    };
    /**
     * Gets the msdyn_remainingduration property value. 
     * @returns a integer
     */
    public get msdyn_remainingduration() {
        return this._msdyn_remainingduration;
    };
    /**
     * Sets the msdyn_remainingduration property value. 
     * @param value Value to set for the msdyn_remainingduration property.
     */
    public set msdyn_remainingduration(value: number | undefined) {
        this._msdyn_remainingduration = value;
    };
    /**
     * Gets the msdyn_requeststatus property value. 
     * @returns a string
     */
    public get msdyn_requeststatus() {
        return this._msdyn_requeststatus;
    };
    /**
     * Sets the msdyn_requeststatus property value. 
     * @param value Value to set for the msdyn_requeststatus property.
     */
    public set msdyn_requeststatus(value: string | undefined) {
        this._msdyn_requeststatus = value;
    };
    /**
     * Gets the msdyn_requirementgroupcontrolviewid property value. 
     * @returns a string
     */
    public get msdyn_requirementgroupcontrolviewid() {
        return this._msdyn_requirementgroupcontrolviewid;
    };
    /**
     * Sets the msdyn_requirementgroupcontrolviewid property value. 
     * @param value Value to set for the msdyn_requirementgroupcontrolviewid property.
     */
    public set msdyn_requirementgroupcontrolviewid(value: string | undefined) {
        this._msdyn_requirementgroupcontrolviewid = value;
    };
    /**
     * Gets the msdyn_requirementgroupid property value. 
     * @returns a msdyn_requirementgroup
     */
    public get msdyn_requirementgroupid() {
        return this._msdyn_requirementgroupid;
    };
    /**
     * Sets the msdyn_requirementgroupid property value. 
     * @param value Value to set for the msdyn_requirementgroupid property.
     */
    public set msdyn_requirementgroupid(value: Msdyn_requirementgroup | undefined) {
        this._msdyn_requirementgroupid = value;
    };
    /**
     * Gets the msdyn_requirementrelationshipid property value. 
     * @returns a msdyn_requirementrelationship
     */
    public get msdyn_requirementrelationshipid() {
        return this._msdyn_requirementrelationshipid;
    };
    /**
     * Sets the msdyn_requirementrelationshipid property value. 
     * @param value Value to set for the msdyn_requirementrelationshipid property.
     */
    public set msdyn_requirementrelationshipid(value: Msdyn_requirementrelationship | undefined) {
        this._msdyn_requirementrelationshipid = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_resourcerequirement_Annotations() {
        return this._msdyn_resourcerequirement_Annotations;
    };
    /**
     * Sets the msdyn_resourcerequirement_Annotations property value. 
     * @param value Value to set for the msdyn_resourcerequirement_Annotations property.
     */
    public set msdyn_resourcerequirement_Annotations(value: Annotation[] | undefined) {
        this._msdyn_resourcerequirement_Annotations = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_resourcerequirement_AsyncOperations() {
        return this._msdyn_resourcerequirement_AsyncOperations;
    };
    /**
     * Sets the msdyn_resourcerequirement_AsyncOperations property value. 
     * @param value Value to set for the msdyn_resourcerequirement_AsyncOperations property.
     */
    public set msdyn_resourcerequirement_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_resourcerequirement_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_bookableresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_resourcerequirement_bookableresource() {
        return this._msdyn_resourcerequirement_bookableresource;
    };
    /**
     * Sets the msdyn_resourcerequirement_bookableresource property value. 
     * @param value Value to set for the msdyn_resourcerequirement_bookableresource property.
     */
    public set msdyn_resourcerequirement_bookableresource(value: Bookableresource[] | undefined) {
        this._msdyn_resourcerequirement_bookableresource = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement() {
        return this._msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement property.
     */
    public set msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement(value: Bookableresourcebooking[] | undefined) {
        this._msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement property value. 
     * @returns a bookableresourcebookingheader
     */
    public get msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement() {
        return this._msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement property.
     */
    public set msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement(value: Bookableresourcebookingheader[] | undefined) {
        this._msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_bookingheader property value. 
     * @returns a bookableresourcebookingheader
     */
    public get msdyn_resourcerequirement_bookingheader() {
        return this._msdyn_resourcerequirement_bookingheader;
    };
    /**
     * Sets the msdyn_resourcerequirement_bookingheader property value. 
     * @param value Value to set for the msdyn_resourcerequirement_bookingheader property.
     */
    public set msdyn_resourcerequirement_bookingheader(value: Bookableresourcebookingheader[] | undefined) {
        this._msdyn_resourcerequirement_bookingheader = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_resourcerequirement_BulkDeleteFailures() {
        return this._msdyn_resourcerequirement_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_resourcerequirement_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_resourcerequirement_BulkDeleteFailures property.
     */
    public set msdyn_resourcerequirement_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_resourcerequirement_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_characteristicreq property value. 
     * @returns a msdyn_characteristicreqforteammember
     */
    public get msdyn_resourcerequirement_characteristicreq() {
        return this._msdyn_resourcerequirement_characteristicreq;
    };
    /**
     * Sets the msdyn_resourcerequirement_characteristicreq property value. 
     * @param value Value to set for the msdyn_resourcerequirement_characteristicreq property.
     */
    public set msdyn_resourcerequirement_characteristicreq(value: Msdyn_characteristicreqforteammember[] | undefined) {
        this._msdyn_resourcerequirement_characteristicreq = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_details property value. 
     * @returns a msdyn_resourcerequirementdetail
     */
    public get msdyn_resourcerequirement_details() {
        return this._msdyn_resourcerequirement_details;
    };
    /**
     * Sets the msdyn_resourcerequirement_details property value. 
     * @param value Value to set for the msdyn_resourcerequirement_details property.
     */
    public set msdyn_resourcerequirement_details(value: Msdyn_resourcerequirementdetail[] | undefined) {
        this._msdyn_resourcerequirement_details = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcerequirement_DuplicateBaseRecord() {
        return this._msdyn_resourcerequirement_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_resourcerequirement_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_resourcerequirement_DuplicateBaseRecord property.
     */
    public set msdyn_resourcerequirement_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcerequirement_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcerequirement_DuplicateMatchingRecord() {
        return this._msdyn_resourcerequirement_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_resourcerequirement_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_resourcerequirement_DuplicateMatchingRecord property.
     */
    public set msdyn_resourcerequirement_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcerequirement_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_resourcerequirement_MailboxTrackingFolders() {
        return this._msdyn_resourcerequirement_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_resourcerequirement_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_resourcerequirement_MailboxTrackingFolders property.
     */
    public set msdyn_resourcerequirement_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_resourcerequirement_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_resourcerequirement_PrincipalObjectAttributeAccesses() {
        return this._msdyn_resourcerequirement_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_resourcerequirement_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_resourcerequirement_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_resourcerequirement_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_resourcerequirement_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_resourcerequirement_ProcessSession() {
        return this._msdyn_resourcerequirement_ProcessSession;
    };
    /**
     * Sets the msdyn_resourcerequirement_ProcessSession property value. 
     * @param value Value to set for the msdyn_resourcerequirement_ProcessSession property.
     */
    public set msdyn_resourcerequirement_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_resourcerequirement_ProcessSession = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_projectteam property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_resourcerequirement_projectteam() {
        return this._msdyn_resourcerequirement_projectteam;
    };
    /**
     * Sets the msdyn_resourcerequirement_projectteam property value. 
     * @param value Value to set for the msdyn_resourcerequirement_projectteam property.
     */
    public set msdyn_resourcerequirement_projectteam(value: Msdyn_projectteam[] | undefined) {
        this._msdyn_resourcerequirement_projectteam = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_request property value. 
     * @returns a msdyn_resourcerequest
     */
    public get msdyn_resourcerequirement_request() {
        return this._msdyn_resourcerequirement_request;
    };
    /**
     * Sets the msdyn_resourcerequirement_request property value. 
     * @param value Value to set for the msdyn_resourcerequirement_request property.
     */
    public set msdyn_resourcerequirement_request(value: Msdyn_resourcerequest[] | undefined) {
        this._msdyn_resourcerequirement_request = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement property value. 
     * @returns a msdyn_requirementcharacteristic
     */
    public get msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement() {
        return this._msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement property.
     */
    public set msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement(value: Msdyn_requirementcharacteristic[] | undefined) {
        this._msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_requirementdependency_dependentrequirement property value. 
     * @returns a msdyn_requirementdependency
     */
    public get msdyn_resourcerequirement_requirementdependency_dependentrequirement() {
        return this._msdyn_resourcerequirement_requirementdependency_dependentrequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_requirementdependency_dependentrequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_requirementdependency_dependentrequirement property.
     */
    public set msdyn_resourcerequirement_requirementdependency_dependentrequirement(value: Msdyn_requirementdependency[] | undefined) {
        this._msdyn_resourcerequirement_requirementdependency_dependentrequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_requirementdependency_resourcerequirement property value. 
     * @returns a msdyn_requirementdependency
     */
    public get msdyn_resourcerequirement_requirementdependency_resourcerequirement() {
        return this._msdyn_resourcerequirement_requirementdependency_resourcerequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_requirementdependency_resourcerequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_requirementdependency_resourcerequirement property.
     */
    public set msdyn_resourcerequirement_requirementdependency_resourcerequirement(value: Msdyn_requirementdependency[] | undefined) {
        this._msdyn_resourcerequirement_requirementdependency_resourcerequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement property value. 
     * @returns a msdyn_requirementorganizationunit
     */
    public get msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement() {
        return this._msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement property.
     */
    public set msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement(value: Msdyn_requirementorganizationunit[] | undefined) {
        this._msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement property value. 
     * @returns a msdyn_requirementresourcecategory
     */
    public get msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement() {
        return this._msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement property.
     */
    public set msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement(value: Msdyn_requirementresourcecategory[] | undefined) {
        this._msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement property value. 
     * @returns a msdyn_requirementresourcepreference
     */
    public get msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement() {
        return this._msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement;
    };
    /**
     * Sets the msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement property value. 
     * @param value Value to set for the msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement property.
     */
    public set msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement(value: Msdyn_requirementresourcepreference[] | undefined) {
        this._msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_resourcerequirement_SyncErrors() {
        return this._msdyn_resourcerequirement_SyncErrors;
    };
    /**
     * Sets the msdyn_resourcerequirement_SyncErrors property value. 
     * @param value Value to set for the msdyn_resourcerequirement_SyncErrors property.
     */
    public set msdyn_resourcerequirement_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_resourcerequirement_SyncErrors = value;
    };
    /**
     * Gets the msdyn_resourcerequirement_systemuser property value. 
     * @returns a systemuser
     */
    public get msdyn_resourcerequirement_systemuser() {
        return this._msdyn_resourcerequirement_systemuser;
    };
    /**
     * Sets the msdyn_resourcerequirement_systemuser property value. 
     * @param value Value to set for the msdyn_resourcerequirement_systemuser property.
     */
    public set msdyn_resourcerequirement_systemuser(value: Systemuser[] | undefined) {
        this._msdyn_resourcerequirement_systemuser = value;
    };
    /**
     * Gets the msdyn_resourcerequirementid property value. 
     * @returns a string
     */
    public get msdyn_resourcerequirementid() {
        return this._msdyn_resourcerequirementid;
    };
    /**
     * Sets the msdyn_resourcerequirementid property value. 
     * @param value Value to set for the msdyn_resourcerequirementid property.
     */
    public set msdyn_resourcerequirementid(value: string | undefined) {
        this._msdyn_resourcerequirementid = value;
    };
    /**
     * Gets the msdyn_resourcetype property value. 
     * @returns a string
     */
    public get msdyn_resourcetype() {
        return this._msdyn_resourcetype;
    };
    /**
     * Sets the msdyn_resourcetype property value. 
     * @param value Value to set for the msdyn_resourcetype property.
     */
    public set msdyn_resourcetype(value: string | undefined) {
        this._msdyn_resourcetype = value;
    };
    /**
     * Gets the msdyn_roleid property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_roleid() {
        return this._msdyn_roleid;
    };
    /**
     * Sets the msdyn_roleid property value. 
     * @param value Value to set for the msdyn_roleid property.
     */
    public set msdyn_roleid(value: Bookableresourcecategory | undefined) {
        this._msdyn_roleid = value;
    };
    /**
     * Gets the msdyn_serviceappointment property value. 
     * @returns a serviceappointment
     */
    public get msdyn_serviceappointment() {
        return this._msdyn_serviceappointment;
    };
    /**
     * Sets the msdyn_serviceappointment property value. 
     * @param value Value to set for the msdyn_serviceappointment property.
     */
    public set msdyn_serviceappointment(value: Serviceappointment | undefined) {
        this._msdyn_serviceappointment = value;
    };
    /**
     * Gets the msdyn_sortoptions property value. 
     * @returns a string
     */
    public get msdyn_sortoptions() {
        return this._msdyn_sortoptions;
    };
    /**
     * Sets the msdyn_sortoptions property value. 
     * @param value Value to set for the msdyn_sortoptions property.
     */
    public set msdyn_sortoptions(value: string | undefined) {
        this._msdyn_sortoptions = value;
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
     * Gets the msdyn_Status property value. 
     * @returns a msdyn_requirementstatus
     */
    public get msdyn_Status() {
        return this._msdyn_Status;
    };
    /**
     * Sets the msdyn_Status property value. 
     * @param value Value to set for the msdyn_Status property.
     */
    public set msdyn_Status(value: Msdyn_requirementstatus | undefined) {
        this._msdyn_Status = value;
    };
    /**
     * Gets the msdyn_templaterequirementid property value. 
     * @returns a string
     */
    public get msdyn_templaterequirementid() {
        return this._msdyn_templaterequirementid;
    };
    /**
     * Sets the msdyn_templaterequirementid property value. 
     * @param value Value to set for the msdyn_templaterequirementid property.
     */
    public set msdyn_templaterequirementid(value: string | undefined) {
        this._msdyn_templaterequirementid = value;
    };
    /**
     * Gets the msdyn_Territory property value. 
     * @returns a territory
     */
    public get msdyn_Territory() {
        return this._msdyn_Territory;
    };
    /**
     * Sets the msdyn_Territory property value. 
     * @param value Value to set for the msdyn_Territory property.
     */
    public set msdyn_Territory(value: Territory | undefined) {
        this._msdyn_Territory = value;
    };
    /**
     * Gets the msdyn_timefrompromised property value. 
     * @returns a Date
     */
    public get msdyn_timefrompromised() {
        return this._msdyn_timefrompromised;
    };
    /**
     * Sets the msdyn_timefrompromised property value. 
     * @param value Value to set for the msdyn_timefrompromised property.
     */
    public set msdyn_timefrompromised(value: Date | undefined) {
        this._msdyn_timefrompromised = value;
    };
    /**
     * Gets the msdyn_TimeGroup property value. 
     * @returns a msdyn_timegroup
     */
    public get msdyn_TimeGroup() {
        return this._msdyn_TimeGroup;
    };
    /**
     * Sets the msdyn_TimeGroup property value. 
     * @param value Value to set for the msdyn_TimeGroup property.
     */
    public set msdyn_TimeGroup(value: Msdyn_timegroup | undefined) {
        this._msdyn_TimeGroup = value;
    };
    /**
     * Gets the msdyn_timetopromised property value. 
     * @returns a Date
     */
    public get msdyn_timetopromised() {
        return this._msdyn_timetopromised;
    };
    /**
     * Sets the msdyn_timetopromised property value. 
     * @param value Value to set for the msdyn_timetopromised property.
     */
    public set msdyn_timetopromised(value: Date | undefined) {
        this._msdyn_timetopromised = value;
    };
    /**
     * Gets the msdyn_timewindowend property value. 
     * @returns a Date
     */
    public get msdyn_timewindowend() {
        return this._msdyn_timewindowend;
    };
    /**
     * Sets the msdyn_timewindowend property value. 
     * @param value Value to set for the msdyn_timewindowend property.
     */
    public set msdyn_timewindowend(value: Date | undefined) {
        this._msdyn_timewindowend = value;
    };
    /**
     * Gets the msdyn_timewindowstart property value. 
     * @returns a Date
     */
    public get msdyn_timewindowstart() {
        return this._msdyn_timewindowstart;
    };
    /**
     * Sets the msdyn_timewindowstart property value. 
     * @param value Value to set for the msdyn_timewindowstart property.
     */
    public set msdyn_timewindowstart(value: Date | undefined) {
        this._msdyn_timewindowstart = value;
    };
    /**
     * Gets the msdyn_timezonefortimewindow property value. 
     * @returns a integer
     */
    public get msdyn_timezonefortimewindow() {
        return this._msdyn_timezonefortimewindow;
    };
    /**
     * Sets the msdyn_timezonefortimewindow property value. 
     * @param value Value to set for the msdyn_timezonefortimewindow property.
     */
    public set msdyn_timezonefortimewindow(value: number | undefined) {
        this._msdyn_timezonefortimewindow = value;
    };
    /**
     * Gets the msdyn_todate property value. 
     * @returns a Date
     */
    public get msdyn_todate() {
        return this._msdyn_todate;
    };
    /**
     * Sets the msdyn_todate property value. 
     * @param value Value to set for the msdyn_todate property.
     */
    public set msdyn_todate(value: Date | undefined) {
        this._msdyn_todate = value;
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
     * Gets the msdyn_workhourtemplate property value. 
     * @returns a msdyn_workhourtemplate
     */
    public get msdyn_workhourtemplate() {
        return this._msdyn_workhourtemplate;
    };
    /**
     * Sets the msdyn_workhourtemplate property value. 
     * @param value Value to set for the msdyn_workhourtemplate property.
     */
    public set msdyn_workhourtemplate(value: Msdyn_workhourtemplate | undefined) {
        this._msdyn_workhourtemplate = value;
    };
    /**
     * Gets the msdyn_worklocation property value. 
     * @returns a integer
     */
    public get msdyn_worklocation() {
        return this._msdyn_worklocation;
    };
    /**
     * Sets the msdyn_worklocation property value. 
     * @param value Value to set for the msdyn_worklocation property.
     */
    public set msdyn_worklocation(value: number | undefined) {
        this._msdyn_worklocation = value;
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
        writer.writeStringValue("_msdyn_appointmentrequirementid_value", this._msdyn_appointmentrequirementid_value);
        writer.writeStringValue("_msdyn_bookingsetupmetadataid_value", this._msdyn_bookingsetupmetadataid_value);
        writer.writeStringValue("_msdyn_priority_value", this._msdyn_priority_value);
        writer.writeStringValue("_msdyn_projectid_value", this._msdyn_projectid_value);
        writer.writeStringValue("_msdyn_requirementgroupid_value", this._msdyn_requirementgroupid_value);
        writer.writeStringValue("_msdyn_requirementrelationshipid_value", this._msdyn_requirementrelationshipid_value);
        writer.writeStringValue("_msdyn_roleid_value", this._msdyn_roleid_value);
        writer.writeStringValue("_msdyn_serviceappointment_value", this._msdyn_serviceappointment_value);
        writer.writeStringValue("_msdyn_status_value", this._msdyn_status_value);
        writer.writeStringValue("_msdyn_territory_value", this._msdyn_territory_value);
        writer.writeStringValue("_msdyn_timegroup_value", this._msdyn_timegroup_value);
        writer.writeStringValue("_msdyn_workhourtemplate_value", this._msdyn_workhourtemplate_value);
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
        writer.writeNumberValue("msdyn_allocationmethod", this.msdyn_allocationmethod);
        writer.writeObjectValue<Appointment>("msdyn_AppointmentRequirementId", this.msdyn_AppointmentRequirementId);
        writer.writeObjectValue<Msdyn_bookingsetupmetadata>("msdyn_BookingSetupMetadataId", this.msdyn_BookingSetupMetadataId);
        writer.writeStringValue("msdyn_calendarid", this.msdyn_calendarid);
        writer.writeStringValue("msdyn_city", this.msdyn_city);
        writer.writeNumberValue("msdyn_costprice", this.msdyn_costprice);
        writer.writeNumberValue("msdyn_costprice_base", this.msdyn_costprice_base);
        writer.writeStringValue("msdyn_country", this.msdyn_country);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeNumberValue("msdyn_effort", this.msdyn_effort);
        writer.writeDateValue("msdyn_fromdate", this.msdyn_fromdate);
        writer.writeNumberValue("msdyn_fulfilledduration", this.msdyn_fulfilledduration);
        writer.writeNumberValue("msdyn_fulfilledhours", this.msdyn_fulfilledhours);
        writer.writeNumberValue("msdyn_hours", this.msdyn_hours);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeBooleanValue("msdyn_isprimary", this.msdyn_isprimary);
        writer.writeBooleanValue("msdyn_istemplate", this.msdyn_istemplate);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeCollectionOfObjectValues<Msdyn_requirementcharacteristic>("msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse", this.msdyn_msdyn_resourcerequirement_msdyn_requirementcharacteristic_RequirementSystemUse);
        writer.writeCollectionOfObjectValues<Msdyn_workorderincident>("msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement", this.msdyn_msdyn_resourcerequirement_msdyn_workorderincident_ResourceRequirement);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_percentage", this.msdyn_percentage);
        writer.writeStringValue("msdyn_pooltype", this.msdyn_pooltype);
        writer.writeObjectValue<Msdyn_priority>("msdyn_Priority", this.msdyn_Priority);
        writer.writeObjectValue<Msdyn_project>("msdyn_projectid", this.msdyn_projectid);
        writer.writeNumberValue("msdyn_proposedduration", this.msdyn_proposedduration);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeNumberValue("msdyn_remainingduration", this.msdyn_remainingduration);
        writer.writeStringValue("msdyn_requeststatus", this.msdyn_requeststatus);
        writer.writeStringValue("msdyn_requirementgroupcontrolviewid", this.msdyn_requirementgroupcontrolviewid);
        writer.writeObjectValue<Msdyn_requirementgroup>("msdyn_requirementgroupid", this.msdyn_requirementgroupid);
        writer.writeObjectValue<Msdyn_requirementrelationship>("msdyn_requirementrelationshipid", this.msdyn_requirementrelationshipid);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_resourcerequirement_Annotations", this.msdyn_resourcerequirement_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_resourcerequirement_AsyncOperations", this.msdyn_resourcerequirement_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresource>("msdyn_resourcerequirement_bookableresource", this.msdyn_resourcerequirement_bookableresource);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement", this.msdyn_resourcerequirement_bookableresourcebooking_ResourceRequirement);
        writer.writeCollectionOfObjectValues<Bookableresourcebookingheader>("msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement", this.msdyn_resourcerequirement_bookableresourcebookingheader_ResourceRequirement);
        writer.writeCollectionOfObjectValues<Bookableresourcebookingheader>("msdyn_resourcerequirement_bookingheader", this.msdyn_resourcerequirement_bookingheader);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_resourcerequirement_BulkDeleteFailures", this.msdyn_resourcerequirement_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Msdyn_characteristicreqforteammember>("msdyn_resourcerequirement_characteristicreq", this.msdyn_resourcerequirement_characteristicreq);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequirementdetail>("msdyn_resourcerequirement_details", this.msdyn_resourcerequirement_details);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcerequirement_DuplicateBaseRecord", this.msdyn_resourcerequirement_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcerequirement_DuplicateMatchingRecord", this.msdyn_resourcerequirement_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_resourcerequirement_MailboxTrackingFolders", this.msdyn_resourcerequirement_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_resourcerequirement_PrincipalObjectAttributeAccesses", this.msdyn_resourcerequirement_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_resourcerequirement_ProcessSession", this.msdyn_resourcerequirement_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyn_projectteam>("msdyn_resourcerequirement_projectteam", this.msdyn_resourcerequirement_projectteam);
        writer.writeCollectionOfObjectValues<Msdyn_resourcerequest>("msdyn_resourcerequirement_request", this.msdyn_resourcerequirement_request);
        writer.writeCollectionOfObjectValues<Msdyn_requirementcharacteristic>("msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement", this.msdyn_resourcerequirement_requirementcharacteristic_resourcerequirement);
        writer.writeCollectionOfObjectValues<Msdyn_requirementdependency>("msdyn_resourcerequirement_requirementdependency_dependentrequirement", this.msdyn_resourcerequirement_requirementdependency_dependentrequirement);
        writer.writeCollectionOfObjectValues<Msdyn_requirementdependency>("msdyn_resourcerequirement_requirementdependency_resourcerequirement", this.msdyn_resourcerequirement_requirementdependency_resourcerequirement);
        writer.writeCollectionOfObjectValues<Msdyn_requirementorganizationunit>("msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement", this.msdyn_resourcerequirement_requirementorganizationunit_ResourceRequirement);
        writer.writeCollectionOfObjectValues<Msdyn_requirementresourcecategory>("msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement", this.msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement);
        writer.writeCollectionOfObjectValues<Msdyn_requirementresourcepreference>("msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement", this.msdyn_resourcerequirement_requirementresourcepreference_ResourceRequirement);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_resourcerequirement_SyncErrors", this.msdyn_resourcerequirement_SyncErrors);
        writer.writeCollectionOfObjectValues<Systemuser>("msdyn_resourcerequirement_systemuser", this.msdyn_resourcerequirement_systemuser);
        writer.writeStringValue("msdyn_resourcerequirementid", this.msdyn_resourcerequirementid);
        writer.writeStringValue("msdyn_resourcetype", this.msdyn_resourcetype);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_roleid", this.msdyn_roleid);
        writer.writeObjectValue<Serviceappointment>("msdyn_serviceappointment", this.msdyn_serviceappointment);
        writer.writeStringValue("msdyn_sortoptions", this.msdyn_sortoptions);
        writer.writeStringValue("msdyn_stateorprovince", this.msdyn_stateorprovince);
        writer.writeObjectValue<Msdyn_requirementstatus>("msdyn_Status", this.msdyn_Status);
        writer.writeStringValue("msdyn_templaterequirementid", this.msdyn_templaterequirementid);
        writer.writeObjectValue<Territory>("msdyn_Territory", this.msdyn_Territory);
        writer.writeDateValue("msdyn_timefrompromised", this.msdyn_timefrompromised);
        writer.writeObjectValue<Msdyn_timegroup>("msdyn_TimeGroup", this.msdyn_TimeGroup);
        writer.writeDateValue("msdyn_timetopromised", this.msdyn_timetopromised);
        writer.writeDateValue("msdyn_timewindowend", this.msdyn_timewindowend);
        writer.writeDateValue("msdyn_timewindowstart", this.msdyn_timewindowstart);
        writer.writeNumberValue("msdyn_timezonefortimewindow", this.msdyn_timezonefortimewindow);
        writer.writeDateValue("msdyn_todate", this.msdyn_todate);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeObjectValue<Msdyn_workhourtemplate>("msdyn_workhourtemplate", this.msdyn_workhourtemplate);
        writer.writeNumberValue("msdyn_worklocation", this.msdyn_worklocation);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_WorkOrder", this.msdyn_WorkOrder);
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
