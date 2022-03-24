import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_analysiscomponentFromDiscriminatorValue} from './createMsdyn_analysiscomponentFromDiscriminatorValue';
import {createMsdyn_analysisjobFromDiscriminatorValue} from './createMsdyn_analysisjobFromDiscriminatorValue';
import {createMsdyn_analysisresultdetailFromDiscriminatorValue} from './createMsdyn_analysisresultdetailFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_analysiscomponent, Msdyn_analysisjob, Msdyn_analysisresultdetail, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_analysisresult extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_analysiscomponentid_value?: string | undefined;
    private __msdyn_analysisjobid_value?: string | undefined;
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
    private _msdyn_AnalysisComponentId?: Msdyn_analysiscomponent | undefined;
    private _msdyn_analysiscomponenttype?: number | undefined;
    private _msdyn_AnalysisJobId?: Msdyn_analysisjob | undefined;
    private _msdyn_analysisresult_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_analysisresult_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_analysisresult_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_analysisresult_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_analysisresult_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_analysisresult_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_analysisresult_ProcessSession?: Processsession[] | undefined;
    private _msdyn_analysisresult_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_analysisresultid?: string | undefined;
    private _msdyn_category?: number | undefined;
    private _msdyn_componenttype?: number | undefined;
    private _msdyn_entityname?: string | undefined;
    private _msdyn_fileuri?: string | undefined;
    private _msdyn_hasresolution?: boolean | undefined;
    private _msdyn_helplink?: string | undefined;
    private _msdyn_level?: number | undefined;
    private _msdyn_line?: number | undefined;
    private _msdyn_member?: string | undefined;
    private _msdyn_message?: string | undefined;
    private _msdyn_messagearguments?: string | undefined;
    private _msdyn_messageid?: string | undefined;
    private _msdyn_module?: string | undefined;
    private _msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult?: Msdyn_analysisresultdetail[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_repairissuetype?: string | undefined;
    private _msdyn_returnstatus?: number | undefined;
    private _msdyn_ruleid?: string | undefined;
    private _msdyn_rulereferenceuri?: string | undefined;
    private _msdyn_severity?: number | undefined;
    private _msdyn_snippet?: string | undefined;
    private _msdyn_solutionhealthmessage?: string | undefined;
    private _msdyn_type?: string | undefined;
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
     * Gets the _msdyn_analysiscomponentid_value property value. 
     * @returns a string
     */
    public get _msdyn_analysiscomponentid_value() {
        return this.__msdyn_analysiscomponentid_value;
    };
    /**
     * Sets the _msdyn_analysiscomponentid_value property value. 
     * @param value Value to set for the _msdyn_analysiscomponentid_value property.
     */
    public set _msdyn_analysiscomponentid_value(value: string | undefined) {
        this.__msdyn_analysiscomponentid_value = value;
    };
    /**
     * Gets the _msdyn_analysisjobid_value property value. 
     * @returns a string
     */
    public get _msdyn_analysisjobid_value() {
        return this.__msdyn_analysisjobid_value;
    };
    /**
     * Sets the _msdyn_analysisjobid_value property value. 
     * @param value Value to set for the _msdyn_analysisjobid_value property.
     */
    public set _msdyn_analysisjobid_value(value: string | undefined) {
        this.__msdyn_analysisjobid_value = value;
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
     * Instantiates a new msdyn_analysisresult and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_analysiscomponentid_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._msdyn_analysiscomponentid_value = n.getStringValue(); },
            "_msdyn_analysisjobid_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._msdyn_analysisjobid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_analysisresult)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_analysisresult).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_analysisresult).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_analysisresult).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_analysisresult).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_analysisresult).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_analysisresult).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_analysisresult).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_AnalysisComponentId": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_AnalysisComponentId = n.getObjectValue<Msdyn_analysiscomponent>(createMsdyn_analysiscomponentFromDiscriminatorValue); },
            "msdyn_analysiscomponenttype": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysiscomponenttype = n.getNumberValue(); },
            "msdyn_AnalysisJobId": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_AnalysisJobId = n.getObjectValue<Msdyn_analysisjob>(createMsdyn_analysisjobFromDiscriminatorValue); },
            "msdyn_analysisresult_AsyncOperations": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_analysisresult_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_analysisresult_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_analysisresult_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_analysisresult_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_analysisresult_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_analysisresult_ProcessSession": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_analysisresult_SyncErrors": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresult_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_analysisresultid": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_analysisresultid = n.getStringValue(); },
            "msdyn_category": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_category = n.getNumberValue(); },
            "msdyn_componenttype": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_componenttype = n.getNumberValue(); },
            "msdyn_entityname": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_entityname = n.getStringValue(); },
            "msdyn_fileuri": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_fileuri = n.getStringValue(); },
            "msdyn_hasresolution": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_hasresolution = n.getBooleanValue(); },
            "msdyn_helplink": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_helplink = n.getStringValue(); },
            "msdyn_level": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_level = n.getNumberValue(); },
            "msdyn_line": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_line = n.getNumberValue(); },
            "msdyn_member": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_member = n.getStringValue(); },
            "msdyn_message": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_message = n.getStringValue(); },
            "msdyn_messagearguments": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_messagearguments = n.getStringValue(); },
            "msdyn_messageid": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_messageid = n.getStringValue(); },
            "msdyn_module": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_module = n.getStringValue(); },
            "msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult = n.getCollectionOfObjectValues<Msdyn_analysisresultdetail>(createMsdyn_analysisresultdetailFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_name = n.getStringValue(); },
            "msdyn_repairissuetype": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_repairissuetype = n.getStringValue(); },
            "msdyn_returnstatus": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_returnstatus = n.getNumberValue(); },
            "msdyn_ruleid": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_ruleid = n.getStringValue(); },
            "msdyn_rulereferenceuri": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_rulereferenceuri = n.getStringValue(); },
            "msdyn_severity": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_severity = n.getNumberValue(); },
            "msdyn_snippet": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_snippet = n.getStringValue(); },
            "msdyn_solutionhealthmessage": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_solutionhealthmessage = n.getStringValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_analysisresult).msdyn_type = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_analysisresult).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_analysisresult).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_analysisresult).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_analysisresult).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_analysisresult).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_analysisresult).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_analysisresult).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_analysisresult).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_analysisresult).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_analysisresult).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_AnalysisComponentId property value. 
     * @returns a msdyn_analysiscomponent
     */
    public get msdyn_AnalysisComponentId() {
        return this._msdyn_AnalysisComponentId;
    };
    /**
     * Sets the msdyn_AnalysisComponentId property value. 
     * @param value Value to set for the msdyn_AnalysisComponentId property.
     */
    public set msdyn_AnalysisComponentId(value: Msdyn_analysiscomponent | undefined) {
        this._msdyn_AnalysisComponentId = value;
    };
    /**
     * Gets the msdyn_analysiscomponenttype property value. 
     * @returns a integer
     */
    public get msdyn_analysiscomponenttype() {
        return this._msdyn_analysiscomponenttype;
    };
    /**
     * Sets the msdyn_analysiscomponenttype property value. 
     * @param value Value to set for the msdyn_analysiscomponenttype property.
     */
    public set msdyn_analysiscomponenttype(value: number | undefined) {
        this._msdyn_analysiscomponenttype = value;
    };
    /**
     * Gets the msdyn_AnalysisJobId property value. 
     * @returns a msdyn_analysisjob
     */
    public get msdyn_AnalysisJobId() {
        return this._msdyn_AnalysisJobId;
    };
    /**
     * Sets the msdyn_AnalysisJobId property value. 
     * @param value Value to set for the msdyn_AnalysisJobId property.
     */
    public set msdyn_AnalysisJobId(value: Msdyn_analysisjob | undefined) {
        this._msdyn_AnalysisJobId = value;
    };
    /**
     * Gets the msdyn_analysisresult_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_analysisresult_AsyncOperations() {
        return this._msdyn_analysisresult_AsyncOperations;
    };
    /**
     * Sets the msdyn_analysisresult_AsyncOperations property value. 
     * @param value Value to set for the msdyn_analysisresult_AsyncOperations property.
     */
    public set msdyn_analysisresult_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_analysisresult_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_analysisresult_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_analysisresult_BulkDeleteFailures() {
        return this._msdyn_analysisresult_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_analysisresult_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_analysisresult_BulkDeleteFailures property.
     */
    public set msdyn_analysisresult_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_analysisresult_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_analysisresult_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_analysisresult_DuplicateBaseRecord() {
        return this._msdyn_analysisresult_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_analysisresult_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_analysisresult_DuplicateBaseRecord property.
     */
    public set msdyn_analysisresult_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_analysisresult_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_analysisresult_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_analysisresult_DuplicateMatchingRecord() {
        return this._msdyn_analysisresult_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_analysisresult_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_analysisresult_DuplicateMatchingRecord property.
     */
    public set msdyn_analysisresult_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_analysisresult_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_analysisresult_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_analysisresult_MailboxTrackingFolders() {
        return this._msdyn_analysisresult_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_analysisresult_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_analysisresult_MailboxTrackingFolders property.
     */
    public set msdyn_analysisresult_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_analysisresult_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_analysisresult_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_analysisresult_PrincipalObjectAttributeAccesses() {
        return this._msdyn_analysisresult_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_analysisresult_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_analysisresult_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_analysisresult_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_analysisresult_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_analysisresult_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_analysisresult_ProcessSession() {
        return this._msdyn_analysisresult_ProcessSession;
    };
    /**
     * Sets the msdyn_analysisresult_ProcessSession property value. 
     * @param value Value to set for the msdyn_analysisresult_ProcessSession property.
     */
    public set msdyn_analysisresult_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_analysisresult_ProcessSession = value;
    };
    /**
     * Gets the msdyn_analysisresult_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_analysisresult_SyncErrors() {
        return this._msdyn_analysisresult_SyncErrors;
    };
    /**
     * Sets the msdyn_analysisresult_SyncErrors property value. 
     * @param value Value to set for the msdyn_analysisresult_SyncErrors property.
     */
    public set msdyn_analysisresult_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_analysisresult_SyncErrors = value;
    };
    /**
     * Gets the msdyn_analysisresultid property value. 
     * @returns a string
     */
    public get msdyn_analysisresultid() {
        return this._msdyn_analysisresultid;
    };
    /**
     * Sets the msdyn_analysisresultid property value. 
     * @param value Value to set for the msdyn_analysisresultid property.
     */
    public set msdyn_analysisresultid(value: string | undefined) {
        this._msdyn_analysisresultid = value;
    };
    /**
     * Gets the msdyn_category property value. 
     * @returns a integer
     */
    public get msdyn_category() {
        return this._msdyn_category;
    };
    /**
     * Sets the msdyn_category property value. 
     * @param value Value to set for the msdyn_category property.
     */
    public set msdyn_category(value: number | undefined) {
        this._msdyn_category = value;
    };
    /**
     * Gets the msdyn_componenttype property value. 
     * @returns a integer
     */
    public get msdyn_componenttype() {
        return this._msdyn_componenttype;
    };
    /**
     * Sets the msdyn_componenttype property value. 
     * @param value Value to set for the msdyn_componenttype property.
     */
    public set msdyn_componenttype(value: number | undefined) {
        this._msdyn_componenttype = value;
    };
    /**
     * Gets the msdyn_entityname property value. 
     * @returns a string
     */
    public get msdyn_entityname() {
        return this._msdyn_entityname;
    };
    /**
     * Sets the msdyn_entityname property value. 
     * @param value Value to set for the msdyn_entityname property.
     */
    public set msdyn_entityname(value: string | undefined) {
        this._msdyn_entityname = value;
    };
    /**
     * Gets the msdyn_fileuri property value. 
     * @returns a string
     */
    public get msdyn_fileuri() {
        return this._msdyn_fileuri;
    };
    /**
     * Sets the msdyn_fileuri property value. 
     * @param value Value to set for the msdyn_fileuri property.
     */
    public set msdyn_fileuri(value: string | undefined) {
        this._msdyn_fileuri = value;
    };
    /**
     * Gets the msdyn_hasresolution property value. 
     * @returns a boolean
     */
    public get msdyn_hasresolution() {
        return this._msdyn_hasresolution;
    };
    /**
     * Sets the msdyn_hasresolution property value. 
     * @param value Value to set for the msdyn_hasresolution property.
     */
    public set msdyn_hasresolution(value: boolean | undefined) {
        this._msdyn_hasresolution = value;
    };
    /**
     * Gets the msdyn_helplink property value. 
     * @returns a string
     */
    public get msdyn_helplink() {
        return this._msdyn_helplink;
    };
    /**
     * Sets the msdyn_helplink property value. 
     * @param value Value to set for the msdyn_helplink property.
     */
    public set msdyn_helplink(value: string | undefined) {
        this._msdyn_helplink = value;
    };
    /**
     * Gets the msdyn_level property value. 
     * @returns a integer
     */
    public get msdyn_level() {
        return this._msdyn_level;
    };
    /**
     * Sets the msdyn_level property value. 
     * @param value Value to set for the msdyn_level property.
     */
    public set msdyn_level(value: number | undefined) {
        this._msdyn_level = value;
    };
    /**
     * Gets the msdyn_line property value. 
     * @returns a integer
     */
    public get msdyn_line() {
        return this._msdyn_line;
    };
    /**
     * Sets the msdyn_line property value. 
     * @param value Value to set for the msdyn_line property.
     */
    public set msdyn_line(value: number | undefined) {
        this._msdyn_line = value;
    };
    /**
     * Gets the msdyn_member property value. 
     * @returns a string
     */
    public get msdyn_member() {
        return this._msdyn_member;
    };
    /**
     * Sets the msdyn_member property value. 
     * @param value Value to set for the msdyn_member property.
     */
    public set msdyn_member(value: string | undefined) {
        this._msdyn_member = value;
    };
    /**
     * Gets the msdyn_message property value. 
     * @returns a string
     */
    public get msdyn_message() {
        return this._msdyn_message;
    };
    /**
     * Sets the msdyn_message property value. 
     * @param value Value to set for the msdyn_message property.
     */
    public set msdyn_message(value: string | undefined) {
        this._msdyn_message = value;
    };
    /**
     * Gets the msdyn_messagearguments property value. 
     * @returns a string
     */
    public get msdyn_messagearguments() {
        return this._msdyn_messagearguments;
    };
    /**
     * Sets the msdyn_messagearguments property value. 
     * @param value Value to set for the msdyn_messagearguments property.
     */
    public set msdyn_messagearguments(value: string | undefined) {
        this._msdyn_messagearguments = value;
    };
    /**
     * Gets the msdyn_messageid property value. 
     * @returns a string
     */
    public get msdyn_messageid() {
        return this._msdyn_messageid;
    };
    /**
     * Sets the msdyn_messageid property value. 
     * @param value Value to set for the msdyn_messageid property.
     */
    public set msdyn_messageid(value: string | undefined) {
        this._msdyn_messageid = value;
    };
    /**
     * Gets the msdyn_module property value. 
     * @returns a string
     */
    public get msdyn_module() {
        return this._msdyn_module;
    };
    /**
     * Sets the msdyn_module property value. 
     * @param value Value to set for the msdyn_module property.
     */
    public set msdyn_module(value: string | undefined) {
        this._msdyn_module = value;
    };
    /**
     * Gets the msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult property value. 
     * @returns a msdyn_analysisresultdetail
     */
    public get msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult() {
        return this._msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult;
    };
    /**
     * Sets the msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult property value. 
     * @param value Value to set for the msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult property.
     */
    public set msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult(value: Msdyn_analysisresultdetail[] | undefined) {
        this._msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult = value;
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
     * Gets the msdyn_repairissuetype property value. 
     * @returns a string
     */
    public get msdyn_repairissuetype() {
        return this._msdyn_repairissuetype;
    };
    /**
     * Sets the msdyn_repairissuetype property value. 
     * @param value Value to set for the msdyn_repairissuetype property.
     */
    public set msdyn_repairissuetype(value: string | undefined) {
        this._msdyn_repairissuetype = value;
    };
    /**
     * Gets the msdyn_returnstatus property value. 
     * @returns a integer
     */
    public get msdyn_returnstatus() {
        return this._msdyn_returnstatus;
    };
    /**
     * Sets the msdyn_returnstatus property value. 
     * @param value Value to set for the msdyn_returnstatus property.
     */
    public set msdyn_returnstatus(value: number | undefined) {
        this._msdyn_returnstatus = value;
    };
    /**
     * Gets the msdyn_ruleid property value. 
     * @returns a string
     */
    public get msdyn_ruleid() {
        return this._msdyn_ruleid;
    };
    /**
     * Sets the msdyn_ruleid property value. 
     * @param value Value to set for the msdyn_ruleid property.
     */
    public set msdyn_ruleid(value: string | undefined) {
        this._msdyn_ruleid = value;
    };
    /**
     * Gets the msdyn_rulereferenceuri property value. 
     * @returns a string
     */
    public get msdyn_rulereferenceuri() {
        return this._msdyn_rulereferenceuri;
    };
    /**
     * Sets the msdyn_rulereferenceuri property value. 
     * @param value Value to set for the msdyn_rulereferenceuri property.
     */
    public set msdyn_rulereferenceuri(value: string | undefined) {
        this._msdyn_rulereferenceuri = value;
    };
    /**
     * Gets the msdyn_severity property value. 
     * @returns a integer
     */
    public get msdyn_severity() {
        return this._msdyn_severity;
    };
    /**
     * Sets the msdyn_severity property value. 
     * @param value Value to set for the msdyn_severity property.
     */
    public set msdyn_severity(value: number | undefined) {
        this._msdyn_severity = value;
    };
    /**
     * Gets the msdyn_snippet property value. 
     * @returns a string
     */
    public get msdyn_snippet() {
        return this._msdyn_snippet;
    };
    /**
     * Sets the msdyn_snippet property value. 
     * @param value Value to set for the msdyn_snippet property.
     */
    public set msdyn_snippet(value: string | undefined) {
        this._msdyn_snippet = value;
    };
    /**
     * Gets the msdyn_solutionhealthmessage property value. 
     * @returns a string
     */
    public get msdyn_solutionhealthmessage() {
        return this._msdyn_solutionhealthmessage;
    };
    /**
     * Sets the msdyn_solutionhealthmessage property value. 
     * @param value Value to set for the msdyn_solutionhealthmessage property.
     */
    public set msdyn_solutionhealthmessage(value: string | undefined) {
        this._msdyn_solutionhealthmessage = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a string
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: string | undefined) {
        this._msdyn_type = value;
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
        writer.writeStringValue("_msdyn_analysiscomponentid_value", this._msdyn_analysiscomponentid_value);
        writer.writeStringValue("_msdyn_analysisjobid_value", this._msdyn_analysisjobid_value);
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
        writer.writeObjectValue<Msdyn_analysiscomponent>("msdyn_AnalysisComponentId", this.msdyn_AnalysisComponentId);
        writer.writeNumberValue("msdyn_analysiscomponenttype", this.msdyn_analysiscomponenttype);
        writer.writeObjectValue<Msdyn_analysisjob>("msdyn_AnalysisJobId", this.msdyn_AnalysisJobId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_analysisresult_AsyncOperations", this.msdyn_analysisresult_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_analysisresult_BulkDeleteFailures", this.msdyn_analysisresult_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_analysisresult_DuplicateBaseRecord", this.msdyn_analysisresult_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_analysisresult_DuplicateMatchingRecord", this.msdyn_analysisresult_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_analysisresult_MailboxTrackingFolders", this.msdyn_analysisresult_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_analysisresult_PrincipalObjectAttributeAccesses", this.msdyn_analysisresult_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_analysisresult_ProcessSession", this.msdyn_analysisresult_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_analysisresult_SyncErrors", this.msdyn_analysisresult_SyncErrors);
        writer.writeStringValue("msdyn_analysisresultid", this.msdyn_analysisresultid);
        writer.writeNumberValue("msdyn_category", this.msdyn_category);
        writer.writeNumberValue("msdyn_componenttype", this.msdyn_componenttype);
        writer.writeStringValue("msdyn_entityname", this.msdyn_entityname);
        writer.writeStringValue("msdyn_fileuri", this.msdyn_fileuri);
        writer.writeBooleanValue("msdyn_hasresolution", this.msdyn_hasresolution);
        writer.writeStringValue("msdyn_helplink", this.msdyn_helplink);
        writer.writeNumberValue("msdyn_level", this.msdyn_level);
        writer.writeNumberValue("msdyn_line", this.msdyn_line);
        writer.writeStringValue("msdyn_member", this.msdyn_member);
        writer.writeStringValue("msdyn_message", this.msdyn_message);
        writer.writeStringValue("msdyn_messagearguments", this.msdyn_messagearguments);
        writer.writeStringValue("msdyn_messageid", this.msdyn_messageid);
        writer.writeStringValue("msdyn_module", this.msdyn_module);
        writer.writeCollectionOfObjectValues<Msdyn_analysisresultdetail>("msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult", this.msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_repairissuetype", this.msdyn_repairissuetype);
        writer.writeNumberValue("msdyn_returnstatus", this.msdyn_returnstatus);
        writer.writeStringValue("msdyn_ruleid", this.msdyn_ruleid);
        writer.writeStringValue("msdyn_rulereferenceuri", this.msdyn_rulereferenceuri);
        writer.writeNumberValue("msdyn_severity", this.msdyn_severity);
        writer.writeStringValue("msdyn_snippet", this.msdyn_snippet);
        writer.writeStringValue("msdyn_solutionhealthmessage", this.msdyn_solutionhealthmessage);
        writer.writeStringValue("msdyn_type", this.msdyn_type);
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
