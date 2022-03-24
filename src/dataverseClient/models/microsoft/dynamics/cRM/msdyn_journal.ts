import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_expensecategoryFromDiscriminatorValue} from './createMsdyn_expensecategoryFromDiscriminatorValue';
import {createMsdyn_expenseFromDiscriminatorValue} from './createMsdyn_expenseFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_expense, Msdyn_expensecategory, Msdyn_journalline, Msdyn_project, Msdyn_projecttask, Msdyn_timeentry, Principal, Principalobjectattributeaccess, Processsession, Processstage, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_journal extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_defaultproject_value?: string | undefined;
    private __msdyn_expensecategory_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_projecttask_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
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
    private _msdyn_BookableResource?: Bookableresource | undefined;
    private _msdyn_date?: Date | undefined;
    private _msdyn_DefaultProject?: Msdyn_project | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_ExpenseCategory?: Msdyn_expensecategory | undefined;
    private _msdyn_isposted?: boolean | undefined;
    private _msdyn_journal_Annotations?: Annotation[] | undefined;
    private _msdyn_journal_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_journal_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_journal_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_journal_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_journal_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_journal_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_journal_ProcessSession?: Processsession[] | undefined;
    private _msdyn_journal_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_journalid?: string | undefined;
    private _msdyn_journaltype?: number | undefined;
    private _msdyn_msdyn_journal_msdyn_expense?: Msdyn_expense[] | undefined;
    private _msdyn_msdyn_journal_msdyn_journalline_Journal?: Msdyn_journalline[] | undefined;
    private _msdyn_msdyn_journal_msdyn_timeentry?: Msdyn_timeentry[] | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_ProjectTask?: Msdyn_projecttask | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_transactiondate?: Date | undefined;
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
     * Gets the _msdyn_defaultproject_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultproject_value() {
        return this.__msdyn_defaultproject_value;
    };
    /**
     * Sets the _msdyn_defaultproject_value property value. 
     * @param value Value to set for the _msdyn_defaultproject_value property.
     */
    public set _msdyn_defaultproject_value(value: string | undefined) {
        this.__msdyn_defaultproject_value = value;
    };
    /**
     * Gets the _msdyn_expensecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_expensecategory_value() {
        return this.__msdyn_expensecategory_value;
    };
    /**
     * Sets the _msdyn_expensecategory_value property value. 
     * @param value Value to set for the _msdyn_expensecategory_value property.
     */
    public set _msdyn_expensecategory_value(value: string | undefined) {
        this.__msdyn_expensecategory_value = value;
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
     * Instantiates a new msdyn_journal and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_journal)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_journal)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_journal)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_journal)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_journal)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_defaultproject_value": (o, n) => { (o as unknown as Msdyn_journal)._msdyn_defaultproject_value = n.getStringValue(); },
            "_msdyn_expensecategory_value": (o, n) => { (o as unknown as Msdyn_journal)._msdyn_expensecategory_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_journal)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_projecttask_value": (o, n) => { (o as unknown as Msdyn_journal)._msdyn_projecttask_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_journal)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_journal)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_journal)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_journal)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_journal)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_journal)._stageid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_journal).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_journal).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_journal).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_journal).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_journal).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_journal).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_journal).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_BookableResource": (o, n) => { (o as unknown as Msdyn_journal).msdyn_BookableResource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_date": (o, n) => { (o as unknown as Msdyn_journal).msdyn_date = n.getDateValue(); },
            "msdyn_DefaultProject": (o, n) => { (o as unknown as Msdyn_journal).msdyn_DefaultProject = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_journal).msdyn_description = n.getStringValue(); },
            "msdyn_ExpenseCategory": (o, n) => { (o as unknown as Msdyn_journal).msdyn_ExpenseCategory = n.getObjectValue<Msdyn_expensecategory>(createMsdyn_expensecategoryFromDiscriminatorValue); },
            "msdyn_isposted": (o, n) => { (o as unknown as Msdyn_journal).msdyn_isposted = n.getBooleanValue(); },
            "msdyn_journal_Annotations": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_journal_AsyncOperations": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_journal_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_journal_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_journal_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_journal_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_journal_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_journal_ProcessSession": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_journal_SyncErrors": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journal_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_journalid": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journalid = n.getStringValue(); },
            "msdyn_journaltype": (o, n) => { (o as unknown as Msdyn_journal).msdyn_journaltype = n.getNumberValue(); },
            "msdyn_msdyn_journal_msdyn_expense": (o, n) => { (o as unknown as Msdyn_journal).msdyn_msdyn_journal_msdyn_expense = n.getCollectionOfObjectValues<Msdyn_expense>(createMsdyn_expenseFromDiscriminatorValue); },
            "msdyn_msdyn_journal_msdyn_journalline_Journal": (o, n) => { (o as unknown as Msdyn_journal).msdyn_msdyn_journal_msdyn_journalline_Journal = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_msdyn_journal_msdyn_timeentry": (o, n) => { (o as unknown as Msdyn_journal).msdyn_msdyn_journal_msdyn_timeentry = n.getCollectionOfObjectValues<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_journal).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_ProjectTask": (o, n) => { (o as unknown as Msdyn_journal).msdyn_ProjectTask = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_journal).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_transactiondate": (o, n) => { (o as unknown as Msdyn_journal).msdyn_transactiondate = n.getDateValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_journal).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_journal).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_journal).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_journal).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_journal).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_journal).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_journal).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_journal).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_journal).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_journal).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_journal).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_journal).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_journal).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_BookableResource property value. 
     * @returns a bookableresource
     */
    public get msdyn_BookableResource() {
        return this._msdyn_BookableResource;
    };
    /**
     * Sets the msdyn_BookableResource property value. 
     * @param value Value to set for the msdyn_BookableResource property.
     */
    public set msdyn_BookableResource(value: Bookableresource | undefined) {
        this._msdyn_BookableResource = value;
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
     * Gets the msdyn_DefaultProject property value. 
     * @returns a msdyn_project
     */
    public get msdyn_DefaultProject() {
        return this._msdyn_DefaultProject;
    };
    /**
     * Sets the msdyn_DefaultProject property value. 
     * @param value Value to set for the msdyn_DefaultProject property.
     */
    public set msdyn_DefaultProject(value: Msdyn_project | undefined) {
        this._msdyn_DefaultProject = value;
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
     * Gets the msdyn_ExpenseCategory property value. 
     * @returns a msdyn_expensecategory
     */
    public get msdyn_ExpenseCategory() {
        return this._msdyn_ExpenseCategory;
    };
    /**
     * Sets the msdyn_ExpenseCategory property value. 
     * @param value Value to set for the msdyn_ExpenseCategory property.
     */
    public set msdyn_ExpenseCategory(value: Msdyn_expensecategory | undefined) {
        this._msdyn_ExpenseCategory = value;
    };
    /**
     * Gets the msdyn_isposted property value. 
     * @returns a boolean
     */
    public get msdyn_isposted() {
        return this._msdyn_isposted;
    };
    /**
     * Sets the msdyn_isposted property value. 
     * @param value Value to set for the msdyn_isposted property.
     */
    public set msdyn_isposted(value: boolean | undefined) {
        this._msdyn_isposted = value;
    };
    /**
     * Gets the msdyn_journal_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_journal_Annotations() {
        return this._msdyn_journal_Annotations;
    };
    /**
     * Sets the msdyn_journal_Annotations property value. 
     * @param value Value to set for the msdyn_journal_Annotations property.
     */
    public set msdyn_journal_Annotations(value: Annotation[] | undefined) {
        this._msdyn_journal_Annotations = value;
    };
    /**
     * Gets the msdyn_journal_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_journal_AsyncOperations() {
        return this._msdyn_journal_AsyncOperations;
    };
    /**
     * Sets the msdyn_journal_AsyncOperations property value. 
     * @param value Value to set for the msdyn_journal_AsyncOperations property.
     */
    public set msdyn_journal_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_journal_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_journal_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_journal_BulkDeleteFailures() {
        return this._msdyn_journal_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_journal_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_journal_BulkDeleteFailures property.
     */
    public set msdyn_journal_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_journal_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_journal_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_journal_DuplicateBaseRecord() {
        return this._msdyn_journal_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_journal_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_journal_DuplicateBaseRecord property.
     */
    public set msdyn_journal_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_journal_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_journal_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_journal_DuplicateMatchingRecord() {
        return this._msdyn_journal_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_journal_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_journal_DuplicateMatchingRecord property.
     */
    public set msdyn_journal_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_journal_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_journal_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_journal_MailboxTrackingFolders() {
        return this._msdyn_journal_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_journal_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_journal_MailboxTrackingFolders property.
     */
    public set msdyn_journal_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_journal_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_journal_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_journal_PrincipalObjectAttributeAccesses() {
        return this._msdyn_journal_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_journal_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_journal_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_journal_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_journal_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_journal_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_journal_ProcessSession() {
        return this._msdyn_journal_ProcessSession;
    };
    /**
     * Sets the msdyn_journal_ProcessSession property value. 
     * @param value Value to set for the msdyn_journal_ProcessSession property.
     */
    public set msdyn_journal_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_journal_ProcessSession = value;
    };
    /**
     * Gets the msdyn_journal_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_journal_SyncErrors() {
        return this._msdyn_journal_SyncErrors;
    };
    /**
     * Sets the msdyn_journal_SyncErrors property value. 
     * @param value Value to set for the msdyn_journal_SyncErrors property.
     */
    public set msdyn_journal_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_journal_SyncErrors = value;
    };
    /**
     * Gets the msdyn_journalid property value. 
     * @returns a string
     */
    public get msdyn_journalid() {
        return this._msdyn_journalid;
    };
    /**
     * Sets the msdyn_journalid property value. 
     * @param value Value to set for the msdyn_journalid property.
     */
    public set msdyn_journalid(value: string | undefined) {
        this._msdyn_journalid = value;
    };
    /**
     * Gets the msdyn_journaltype property value. 
     * @returns a integer
     */
    public get msdyn_journaltype() {
        return this._msdyn_journaltype;
    };
    /**
     * Sets the msdyn_journaltype property value. 
     * @param value Value to set for the msdyn_journaltype property.
     */
    public set msdyn_journaltype(value: number | undefined) {
        this._msdyn_journaltype = value;
    };
    /**
     * Gets the msdyn_msdyn_journal_msdyn_expense property value. 
     * @returns a msdyn_expense
     */
    public get msdyn_msdyn_journal_msdyn_expense() {
        return this._msdyn_msdyn_journal_msdyn_expense;
    };
    /**
     * Sets the msdyn_msdyn_journal_msdyn_expense property value. 
     * @param value Value to set for the msdyn_msdyn_journal_msdyn_expense property.
     */
    public set msdyn_msdyn_journal_msdyn_expense(value: Msdyn_expense[] | undefined) {
        this._msdyn_msdyn_journal_msdyn_expense = value;
    };
    /**
     * Gets the msdyn_msdyn_journal_msdyn_journalline_Journal property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_msdyn_journal_msdyn_journalline_Journal() {
        return this._msdyn_msdyn_journal_msdyn_journalline_Journal;
    };
    /**
     * Sets the msdyn_msdyn_journal_msdyn_journalline_Journal property value. 
     * @param value Value to set for the msdyn_msdyn_journal_msdyn_journalline_Journal property.
     */
    public set msdyn_msdyn_journal_msdyn_journalline_Journal(value: Msdyn_journalline[] | undefined) {
        this._msdyn_msdyn_journal_msdyn_journalline_Journal = value;
    };
    /**
     * Gets the msdyn_msdyn_journal_msdyn_timeentry property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_msdyn_journal_msdyn_timeentry() {
        return this._msdyn_msdyn_journal_msdyn_timeentry;
    };
    /**
     * Sets the msdyn_msdyn_journal_msdyn_timeentry property value. 
     * @param value Value to set for the msdyn_msdyn_journal_msdyn_timeentry property.
     */
    public set msdyn_msdyn_journal_msdyn_timeentry(value: Msdyn_timeentry[] | undefined) {
        this._msdyn_msdyn_journal_msdyn_timeentry = value;
    };
    /**
     * Gets the msdyn_Project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_Project() {
        return this._msdyn_Project;
    };
    /**
     * Sets the msdyn_Project property value. 
     * @param value Value to set for the msdyn_Project property.
     */
    public set msdyn_Project(value: Msdyn_project | undefined) {
        this._msdyn_Project = value;
    };
    /**
     * Gets the msdyn_ProjectTask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_ProjectTask() {
        return this._msdyn_ProjectTask;
    };
    /**
     * Sets the msdyn_ProjectTask property value. 
     * @param value Value to set for the msdyn_ProjectTask property.
     */
    public set msdyn_ProjectTask(value: Msdyn_projecttask | undefined) {
        this._msdyn_ProjectTask = value;
    };
    /**
     * Gets the msdyn_ResourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_ResourceCategory() {
        return this._msdyn_ResourceCategory;
    };
    /**
     * Sets the msdyn_ResourceCategory property value. 
     * @param value Value to set for the msdyn_ResourceCategory property.
     */
    public set msdyn_ResourceCategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_transactiondate property value. 
     * @returns a Date
     */
    public get msdyn_transactiondate() {
        return this._msdyn_transactiondate;
    };
    /**
     * Sets the msdyn_transactiondate property value. 
     * @param value Value to set for the msdyn_transactiondate property.
     */
    public set msdyn_transactiondate(value: Date | undefined) {
        this._msdyn_transactiondate = value;
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
        writer.writeStringValue("_msdyn_defaultproject_value", this._msdyn_defaultproject_value);
        writer.writeStringValue("_msdyn_expensecategory_value", this._msdyn_expensecategory_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_projecttask_value", this._msdyn_projecttask_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
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
        writer.writeObjectValue<Bookableresource>("msdyn_BookableResource", this.msdyn_BookableResource);
        writer.writeDateValue("msdyn_date", this.msdyn_date);
        writer.writeObjectValue<Msdyn_project>("msdyn_DefaultProject", this.msdyn_DefaultProject);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Msdyn_expensecategory>("msdyn_ExpenseCategory", this.msdyn_ExpenseCategory);
        writer.writeBooleanValue("msdyn_isposted", this.msdyn_isposted);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_journal_Annotations", this.msdyn_journal_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_journal_AsyncOperations", this.msdyn_journal_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_journal_BulkDeleteFailures", this.msdyn_journal_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_journal_DuplicateBaseRecord", this.msdyn_journal_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_journal_DuplicateMatchingRecord", this.msdyn_journal_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_journal_MailboxTrackingFolders", this.msdyn_journal_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_journal_PrincipalObjectAttributeAccesses", this.msdyn_journal_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_journal_ProcessSession", this.msdyn_journal_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_journal_SyncErrors", this.msdyn_journal_SyncErrors);
        writer.writeStringValue("msdyn_journalid", this.msdyn_journalid);
        writer.writeNumberValue("msdyn_journaltype", this.msdyn_journaltype);
        writer.writeCollectionOfObjectValues<Msdyn_expense>("msdyn_msdyn_journal_msdyn_expense", this.msdyn_msdyn_journal_msdyn_expense);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_msdyn_journal_msdyn_journalline_Journal", this.msdyn_msdyn_journal_msdyn_journalline_Journal);
        writer.writeCollectionOfObjectValues<Msdyn_timeentry>("msdyn_msdyn_journal_msdyn_timeentry", this.msdyn_msdyn_journal_msdyn_timeentry);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_ProjectTask", this.msdyn_ProjectTask);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeDateValue("msdyn_transactiondate", this.msdyn_transactiondate);
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
