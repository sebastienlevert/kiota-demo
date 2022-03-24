import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_analysisjobFromDiscriminatorValue} from './createMsdyn_analysisjobFromDiscriminatorValue';
import {createMsdyn_analysisresultFromDiscriminatorValue} from './createMsdyn_analysisresultFromDiscriminatorValue';
import {createMsdyn_solutionhealthrulesetFromDiscriminatorValue} from './createMsdyn_solutionhealthrulesetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_analysisjob, Msdyn_analysisresult, Msdyn_solutionhealthruleset, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_analysiscomponent extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_analysisjobid_value?: string | undefined;
    private __msdyn_solutionhealthrulesetid_value?: string | undefined;
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
    private _msdyn_analysiscomponent_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_analysiscomponent_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_analysiscomponent_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_analysiscomponent_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_analysiscomponent_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_analysiscomponent_msdyn_analysisresult?: Msdyn_analysisresult[] | undefined;
    private _msdyn_analysiscomponent_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_analysiscomponent_ProcessSession?: Processsession[] | undefined;
    private _msdyn_analysiscomponent_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_analysiscomponentid?: string | undefined;
    private _msdyn_analysiscomponenttype?: number | undefined;
    private _msdyn_AnalysisJobId?: Msdyn_analysisjob | undefined;
    private _msdyn_componentid?: string | undefined;
    private _msdyn_componentname?: string | undefined;
    private _msdyn_componenttype?: number | undefined;
    private _msdyn_componentversion?: string | undefined;
    private _msdyn_errorcount?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_retrycount?: number | undefined;
    private _msdyn_rulefailcount?: number | undefined;
    private _msdyn_rulepasscount?: number | undefined;
    private _msdyn_rulepassrate?: number | undefined;
    private _msdyn_sevcriticalcount?: number | undefined;
    private _msdyn_sevhighcount?: number | undefined;
    private _msdyn_sevlowcount?: number | undefined;
    private _msdyn_sevmediumcount?: number | undefined;
    private _msdyn_SolutionHealthRuleSetId?: Msdyn_solutionhealthruleset | undefined;
    private _msdyn_suggestioncount?: number | undefined;
    private _msdyn_warningcount?: number | undefined;
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
     * Gets the _msdyn_solutionhealthrulesetid_value property value. 
     * @returns a string
     */
    public get _msdyn_solutionhealthrulesetid_value() {
        return this.__msdyn_solutionhealthrulesetid_value;
    };
    /**
     * Sets the _msdyn_solutionhealthrulesetid_value property value. 
     * @param value Value to set for the _msdyn_solutionhealthrulesetid_value property.
     */
    public set _msdyn_solutionhealthrulesetid_value(value: string | undefined) {
        this.__msdyn_solutionhealthrulesetid_value = value;
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
     * Instantiates a new msdyn_analysiscomponent and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_analysisjobid_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._msdyn_analysisjobid_value = n.getStringValue(); },
            "_msdyn_solutionhealthrulesetid_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._msdyn_solutionhealthrulesetid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_analysiscomponent)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_analysiscomponent).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_analysiscomponent).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_analysiscomponent).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_analysiscomponent).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_analysiscomponent).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_analysiscomponent).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_analysiscomponent).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_analysiscomponent_AsyncOperations": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_analysiscomponent_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_analysiscomponent_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_analysiscomponent_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_analysiscomponent_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_analysiscomponent_msdyn_analysisresult": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_msdyn_analysisresult = n.getCollectionOfObjectValues<Msdyn_analysisresult>(createMsdyn_analysisresultFromDiscriminatorValue); },
            "msdyn_analysiscomponent_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_analysiscomponent_ProcessSession": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_analysiscomponent_SyncErrors": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponent_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_analysiscomponentid": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponentid = n.getStringValue(); },
            "msdyn_analysiscomponenttype": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_analysiscomponenttype = n.getNumberValue(); },
            "msdyn_AnalysisJobId": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_AnalysisJobId = n.getObjectValue<Msdyn_analysisjob>(createMsdyn_analysisjobFromDiscriminatorValue); },
            "msdyn_componentid": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_componentid = n.getStringValue(); },
            "msdyn_componentname": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_componentname = n.getStringValue(); },
            "msdyn_componenttype": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_componenttype = n.getNumberValue(); },
            "msdyn_componentversion": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_componentversion = n.getStringValue(); },
            "msdyn_errorcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_errorcount = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_name = n.getStringValue(); },
            "msdyn_retrycount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_retrycount = n.getNumberValue(); },
            "msdyn_rulefailcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_rulefailcount = n.getNumberValue(); },
            "msdyn_rulepasscount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_rulepasscount = n.getNumberValue(); },
            "msdyn_rulepassrate": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_rulepassrate = n.getNumberValue(); },
            "msdyn_sevcriticalcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_sevcriticalcount = n.getNumberValue(); },
            "msdyn_sevhighcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_sevhighcount = n.getNumberValue(); },
            "msdyn_sevlowcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_sevlowcount = n.getNumberValue(); },
            "msdyn_sevmediumcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_sevmediumcount = n.getNumberValue(); },
            "msdyn_SolutionHealthRuleSetId": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_SolutionHealthRuleSetId = n.getObjectValue<Msdyn_solutionhealthruleset>(createMsdyn_solutionhealthrulesetFromDiscriminatorValue); },
            "msdyn_suggestioncount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_suggestioncount = n.getNumberValue(); },
            "msdyn_warningcount": (o, n) => { (o as unknown as Msdyn_analysiscomponent).msdyn_warningcount = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_analysiscomponent).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_analysiscomponent).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_analysiscomponent).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_analysiscomponent).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_analysiscomponent).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_analysiscomponent).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_analysiscomponent).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_analysiscomponent).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_analysiscomponent).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_analysiscomponent).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_analysiscomponent_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_analysiscomponent_AsyncOperations() {
        return this._msdyn_analysiscomponent_AsyncOperations;
    };
    /**
     * Sets the msdyn_analysiscomponent_AsyncOperations property value. 
     * @param value Value to set for the msdyn_analysiscomponent_AsyncOperations property.
     */
    public set msdyn_analysiscomponent_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_analysiscomponent_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_analysiscomponent_BulkDeleteFailures() {
        return this._msdyn_analysiscomponent_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_analysiscomponent_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_analysiscomponent_BulkDeleteFailures property.
     */
    public set msdyn_analysiscomponent_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_analysiscomponent_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_analysiscomponent_DuplicateBaseRecord() {
        return this._msdyn_analysiscomponent_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_analysiscomponent_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_analysiscomponent_DuplicateBaseRecord property.
     */
    public set msdyn_analysiscomponent_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_analysiscomponent_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_analysiscomponent_DuplicateMatchingRecord() {
        return this._msdyn_analysiscomponent_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_analysiscomponent_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_analysiscomponent_DuplicateMatchingRecord property.
     */
    public set msdyn_analysiscomponent_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_analysiscomponent_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_analysiscomponent_MailboxTrackingFolders() {
        return this._msdyn_analysiscomponent_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_analysiscomponent_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_analysiscomponent_MailboxTrackingFolders property.
     */
    public set msdyn_analysiscomponent_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_analysiscomponent_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_msdyn_analysisresult property value. 
     * @returns a msdyn_analysisresult
     */
    public get msdyn_analysiscomponent_msdyn_analysisresult() {
        return this._msdyn_analysiscomponent_msdyn_analysisresult;
    };
    /**
     * Sets the msdyn_analysiscomponent_msdyn_analysisresult property value. 
     * @param value Value to set for the msdyn_analysiscomponent_msdyn_analysisresult property.
     */
    public set msdyn_analysiscomponent_msdyn_analysisresult(value: Msdyn_analysisresult[] | undefined) {
        this._msdyn_analysiscomponent_msdyn_analysisresult = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_analysiscomponent_PrincipalObjectAttributeAccesses() {
        return this._msdyn_analysiscomponent_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_analysiscomponent_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_analysiscomponent_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_analysiscomponent_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_analysiscomponent_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_analysiscomponent_ProcessSession() {
        return this._msdyn_analysiscomponent_ProcessSession;
    };
    /**
     * Sets the msdyn_analysiscomponent_ProcessSession property value. 
     * @param value Value to set for the msdyn_analysiscomponent_ProcessSession property.
     */
    public set msdyn_analysiscomponent_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_analysiscomponent_ProcessSession = value;
    };
    /**
     * Gets the msdyn_analysiscomponent_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_analysiscomponent_SyncErrors() {
        return this._msdyn_analysiscomponent_SyncErrors;
    };
    /**
     * Sets the msdyn_analysiscomponent_SyncErrors property value. 
     * @param value Value to set for the msdyn_analysiscomponent_SyncErrors property.
     */
    public set msdyn_analysiscomponent_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_analysiscomponent_SyncErrors = value;
    };
    /**
     * Gets the msdyn_analysiscomponentid property value. 
     * @returns a string
     */
    public get msdyn_analysiscomponentid() {
        return this._msdyn_analysiscomponentid;
    };
    /**
     * Sets the msdyn_analysiscomponentid property value. 
     * @param value Value to set for the msdyn_analysiscomponentid property.
     */
    public set msdyn_analysiscomponentid(value: string | undefined) {
        this._msdyn_analysiscomponentid = value;
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
     * Gets the msdyn_componentid property value. 
     * @returns a string
     */
    public get msdyn_componentid() {
        return this._msdyn_componentid;
    };
    /**
     * Sets the msdyn_componentid property value. 
     * @param value Value to set for the msdyn_componentid property.
     */
    public set msdyn_componentid(value: string | undefined) {
        this._msdyn_componentid = value;
    };
    /**
     * Gets the msdyn_componentname property value. 
     * @returns a string
     */
    public get msdyn_componentname() {
        return this._msdyn_componentname;
    };
    /**
     * Sets the msdyn_componentname property value. 
     * @param value Value to set for the msdyn_componentname property.
     */
    public set msdyn_componentname(value: string | undefined) {
        this._msdyn_componentname = value;
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
     * Gets the msdyn_componentversion property value. 
     * @returns a string
     */
    public get msdyn_componentversion() {
        return this._msdyn_componentversion;
    };
    /**
     * Sets the msdyn_componentversion property value. 
     * @param value Value to set for the msdyn_componentversion property.
     */
    public set msdyn_componentversion(value: string | undefined) {
        this._msdyn_componentversion = value;
    };
    /**
     * Gets the msdyn_errorcount property value. 
     * @returns a integer
     */
    public get msdyn_errorcount() {
        return this._msdyn_errorcount;
    };
    /**
     * Sets the msdyn_errorcount property value. 
     * @param value Value to set for the msdyn_errorcount property.
     */
    public set msdyn_errorcount(value: number | undefined) {
        this._msdyn_errorcount = value;
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
     * Gets the msdyn_retrycount property value. 
     * @returns a integer
     */
    public get msdyn_retrycount() {
        return this._msdyn_retrycount;
    };
    /**
     * Sets the msdyn_retrycount property value. 
     * @param value Value to set for the msdyn_retrycount property.
     */
    public set msdyn_retrycount(value: number | undefined) {
        this._msdyn_retrycount = value;
    };
    /**
     * Gets the msdyn_rulefailcount property value. 
     * @returns a integer
     */
    public get msdyn_rulefailcount() {
        return this._msdyn_rulefailcount;
    };
    /**
     * Sets the msdyn_rulefailcount property value. 
     * @param value Value to set for the msdyn_rulefailcount property.
     */
    public set msdyn_rulefailcount(value: number | undefined) {
        this._msdyn_rulefailcount = value;
    };
    /**
     * Gets the msdyn_rulepasscount property value. 
     * @returns a integer
     */
    public get msdyn_rulepasscount() {
        return this._msdyn_rulepasscount;
    };
    /**
     * Sets the msdyn_rulepasscount property value. 
     * @param value Value to set for the msdyn_rulepasscount property.
     */
    public set msdyn_rulepasscount(value: number | undefined) {
        this._msdyn_rulepasscount = value;
    };
    /**
     * Gets the msdyn_rulepassrate property value. 
     * @returns a integer
     */
    public get msdyn_rulepassrate() {
        return this._msdyn_rulepassrate;
    };
    /**
     * Sets the msdyn_rulepassrate property value. 
     * @param value Value to set for the msdyn_rulepassrate property.
     */
    public set msdyn_rulepassrate(value: number | undefined) {
        this._msdyn_rulepassrate = value;
    };
    /**
     * Gets the msdyn_sevcriticalcount property value. 
     * @returns a integer
     */
    public get msdyn_sevcriticalcount() {
        return this._msdyn_sevcriticalcount;
    };
    /**
     * Sets the msdyn_sevcriticalcount property value. 
     * @param value Value to set for the msdyn_sevcriticalcount property.
     */
    public set msdyn_sevcriticalcount(value: number | undefined) {
        this._msdyn_sevcriticalcount = value;
    };
    /**
     * Gets the msdyn_sevhighcount property value. 
     * @returns a integer
     */
    public get msdyn_sevhighcount() {
        return this._msdyn_sevhighcount;
    };
    /**
     * Sets the msdyn_sevhighcount property value. 
     * @param value Value to set for the msdyn_sevhighcount property.
     */
    public set msdyn_sevhighcount(value: number | undefined) {
        this._msdyn_sevhighcount = value;
    };
    /**
     * Gets the msdyn_sevlowcount property value. 
     * @returns a integer
     */
    public get msdyn_sevlowcount() {
        return this._msdyn_sevlowcount;
    };
    /**
     * Sets the msdyn_sevlowcount property value. 
     * @param value Value to set for the msdyn_sevlowcount property.
     */
    public set msdyn_sevlowcount(value: number | undefined) {
        this._msdyn_sevlowcount = value;
    };
    /**
     * Gets the msdyn_sevmediumcount property value. 
     * @returns a integer
     */
    public get msdyn_sevmediumcount() {
        return this._msdyn_sevmediumcount;
    };
    /**
     * Sets the msdyn_sevmediumcount property value. 
     * @param value Value to set for the msdyn_sevmediumcount property.
     */
    public set msdyn_sevmediumcount(value: number | undefined) {
        this._msdyn_sevmediumcount = value;
    };
    /**
     * Gets the msdyn_SolutionHealthRuleSetId property value. 
     * @returns a msdyn_solutionhealthruleset
     */
    public get msdyn_SolutionHealthRuleSetId() {
        return this._msdyn_SolutionHealthRuleSetId;
    };
    /**
     * Sets the msdyn_SolutionHealthRuleSetId property value. 
     * @param value Value to set for the msdyn_SolutionHealthRuleSetId property.
     */
    public set msdyn_SolutionHealthRuleSetId(value: Msdyn_solutionhealthruleset | undefined) {
        this._msdyn_SolutionHealthRuleSetId = value;
    };
    /**
     * Gets the msdyn_suggestioncount property value. 
     * @returns a integer
     */
    public get msdyn_suggestioncount() {
        return this._msdyn_suggestioncount;
    };
    /**
     * Sets the msdyn_suggestioncount property value. 
     * @param value Value to set for the msdyn_suggestioncount property.
     */
    public set msdyn_suggestioncount(value: number | undefined) {
        this._msdyn_suggestioncount = value;
    };
    /**
     * Gets the msdyn_warningcount property value. 
     * @returns a integer
     */
    public get msdyn_warningcount() {
        return this._msdyn_warningcount;
    };
    /**
     * Sets the msdyn_warningcount property value. 
     * @param value Value to set for the msdyn_warningcount property.
     */
    public set msdyn_warningcount(value: number | undefined) {
        this._msdyn_warningcount = value;
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
        writer.writeStringValue("_msdyn_analysisjobid_value", this._msdyn_analysisjobid_value);
        writer.writeStringValue("_msdyn_solutionhealthrulesetid_value", this._msdyn_solutionhealthrulesetid_value);
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_analysiscomponent_AsyncOperations", this.msdyn_analysiscomponent_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_analysiscomponent_BulkDeleteFailures", this.msdyn_analysiscomponent_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_analysiscomponent_DuplicateBaseRecord", this.msdyn_analysiscomponent_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_analysiscomponent_DuplicateMatchingRecord", this.msdyn_analysiscomponent_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_analysiscomponent_MailboxTrackingFolders", this.msdyn_analysiscomponent_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_analysisresult>("msdyn_analysiscomponent_msdyn_analysisresult", this.msdyn_analysiscomponent_msdyn_analysisresult);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_analysiscomponent_PrincipalObjectAttributeAccesses", this.msdyn_analysiscomponent_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_analysiscomponent_ProcessSession", this.msdyn_analysiscomponent_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_analysiscomponent_SyncErrors", this.msdyn_analysiscomponent_SyncErrors);
        writer.writeStringValue("msdyn_analysiscomponentid", this.msdyn_analysiscomponentid);
        writer.writeNumberValue("msdyn_analysiscomponenttype", this.msdyn_analysiscomponenttype);
        writer.writeObjectValue<Msdyn_analysisjob>("msdyn_AnalysisJobId", this.msdyn_AnalysisJobId);
        writer.writeStringValue("msdyn_componentid", this.msdyn_componentid);
        writer.writeStringValue("msdyn_componentname", this.msdyn_componentname);
        writer.writeNumberValue("msdyn_componenttype", this.msdyn_componenttype);
        writer.writeStringValue("msdyn_componentversion", this.msdyn_componentversion);
        writer.writeNumberValue("msdyn_errorcount", this.msdyn_errorcount);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_retrycount", this.msdyn_retrycount);
        writer.writeNumberValue("msdyn_rulefailcount", this.msdyn_rulefailcount);
        writer.writeNumberValue("msdyn_rulepasscount", this.msdyn_rulepasscount);
        writer.writeNumberValue("msdyn_rulepassrate", this.msdyn_rulepassrate);
        writer.writeNumberValue("msdyn_sevcriticalcount", this.msdyn_sevcriticalcount);
        writer.writeNumberValue("msdyn_sevhighcount", this.msdyn_sevhighcount);
        writer.writeNumberValue("msdyn_sevlowcount", this.msdyn_sevlowcount);
        writer.writeNumberValue("msdyn_sevmediumcount", this.msdyn_sevmediumcount);
        writer.writeObjectValue<Msdyn_solutionhealthruleset>("msdyn_SolutionHealthRuleSetId", this.msdyn_SolutionHealthRuleSetId);
        writer.writeNumberValue("msdyn_suggestioncount", this.msdyn_suggestioncount);
        writer.writeNumberValue("msdyn_warningcount", this.msdyn_warningcount);
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
