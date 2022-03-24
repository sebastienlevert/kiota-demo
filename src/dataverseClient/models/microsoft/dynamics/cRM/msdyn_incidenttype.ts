import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createKnowledgebaserecordFromDiscriminatorValue} from './createKnowledgebaserecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_agreementbookingincidentFromDiscriminatorValue} from './createMsdyn_agreementbookingincidentFromDiscriminatorValue';
import {createMsdyn_entitlementapplicationFromDiscriminatorValue} from './createMsdyn_entitlementapplicationFromDiscriminatorValue';
import {createMsdyn_incidenttype_requirementgroupFromDiscriminatorValue} from './createMsdyn_incidenttype_requirementgroupFromDiscriminatorValue';
import {createMsdyn_incidenttypecharacteristicFromDiscriminatorValue} from './createMsdyn_incidenttypecharacteristicFromDiscriminatorValue';
import {createMsdyn_incidenttypeproductFromDiscriminatorValue} from './createMsdyn_incidenttypeproductFromDiscriminatorValue';
import {createMsdyn_incidenttyperecommendationresultFromDiscriminatorValue} from './createMsdyn_incidenttyperecommendationresultFromDiscriminatorValue';
import {createMsdyn_incidenttyperesolutionFromDiscriminatorValue} from './createMsdyn_incidenttyperesolutionFromDiscriminatorValue';
import {createMsdyn_incidenttypeserviceFromDiscriminatorValue} from './createMsdyn_incidenttypeserviceFromDiscriminatorValue';
import {createMsdyn_incidenttypeservicetaskFromDiscriminatorValue} from './createMsdyn_incidenttypeservicetaskFromDiscriminatorValue';
import {createMsdyn_iotalertFromDiscriminatorValue} from './createMsdyn_iotalertFromDiscriminatorValue';
import {createMsdyn_quotebookingincidentFromDiscriminatorValue} from './createMsdyn_quotebookingincidentFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderincidentFromDiscriminatorValue} from './createMsdyn_workorderincidentFromDiscriminatorValue';
import {createMsdyn_workordertypeFromDiscriminatorValue} from './createMsdyn_workordertypeFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Incident, Knowledgearticle, Knowledgebaserecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_agreementbookingincident, Msdyn_entitlementapplication, Msdyn_incidenttype_requirementgroup, Msdyn_incidenttypecharacteristic, Msdyn_incidenttypeproduct, Msdyn_incidenttyperecommendationresult, Msdyn_incidenttyperesolution, Msdyn_incidenttypeservice, Msdyn_incidenttypeservicetask, Msdyn_iotalert, Msdyn_quotebookingincident, Msdyn_workorder, Msdyn_workorderincident, Msdyn_workordertype, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_incidenttype extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultworkordertype_value?: string | undefined;
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
    private _msdyn_copyincidentitemstoagreement?: boolean | undefined;
    private _msdyn_defaultworkordertype?: Msdyn_workordertype | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_incidenttype_Annotations?: Annotation[] | undefined;
    private _msdyn_incidenttype_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_incidenttype_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_incidenttype_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_incidenttype_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_incidenttype_knowledgebaserecord?: Knowledgebaserecord[] | undefined;
    private _msdyn_incidenttype_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_incidenttype_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_incidenttype_ProcessSession?: Processsession[] | undefined;
    private _msdyn_incidenttype_requirementgroup_incident?: Msdyn_incidenttype_requirementgroup[] | undefined;
    private _msdyn_incidenttype_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_incidenttypeid?: string | undefined;
    private _msdyn_lastcalculatedtime?: Date | undefined;
    private _msdyn_msdyn_incidenttype_incident_IncidentType?: Incident[] | undefined;
    private _msdyn_msdyn_incidenttype_knowledgearticle?: Knowledgearticle[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_actual_IncidentType?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType?: Msdyn_agreementbookingincident[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype?: Msdyn_entitlementapplication[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType?: Msdyn_incidenttypecharacteristic[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType?: Msdyn_incidenttypeproduct[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType?: Msdyn_incidenttyperecommendationresult[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge?: Msdyn_incidenttyperecommendationresult[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType?: Msdyn_incidenttyperesolution[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType?: Msdyn_incidenttypeservice[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType?: Msdyn_incidenttypeservicetask[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType?: Msdyn_iotalert[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType?: Msdyn_quotebookingincident[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType?: Msdyn_workorder[] | undefined;
    private _msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType?: Msdyn_workorderincident[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_resolutionrequiredonwocompletion?: boolean | undefined;
    private _msdyn_suggestedduration?: number | undefined;
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
     * Gets the _msdyn_defaultworkordertype_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultworkordertype_value() {
        return this.__msdyn_defaultworkordertype_value;
    };
    /**
     * Sets the _msdyn_defaultworkordertype_value property value. 
     * @param value Value to set for the _msdyn_defaultworkordertype_value property.
     */
    public set _msdyn_defaultworkordertype_value(value: string | undefined) {
        this.__msdyn_defaultworkordertype_value = value;
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
     * Instantiates a new msdyn_incidenttype and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultworkordertype_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._msdyn_defaultworkordertype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_incidenttype)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_incidenttype).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_incidenttype).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_incidenttype).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_incidenttype).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_incidenttype).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_incidenttype).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_incidenttype).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_copyincidentitemstoagreement": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_copyincidentitemstoagreement = n.getBooleanValue(); },
            "msdyn_defaultworkordertype": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_defaultworkordertype = n.getObjectValue<Msdyn_workordertype>(createMsdyn_workordertypeFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_incidenttype_Annotations": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_incidenttype_AsyncOperations": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_incidenttype_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_incidenttype_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_incidenttype_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_incidenttype_knowledgebaserecord": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_knowledgebaserecord = n.getCollectionOfObjectValues<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "msdyn_incidenttype_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_incidenttype_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_incidenttype_ProcessSession": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_incidenttype_requirementgroup_incident": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_requirementgroup_incident = n.getCollectionOfObjectValues<Msdyn_incidenttype_requirementgroup>(createMsdyn_incidenttype_requirementgroupFromDiscriminatorValue); },
            "msdyn_incidenttype_SyncErrors": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttype_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_incidenttypeid": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_incidenttypeid = n.getStringValue(); },
            "msdyn_lastcalculatedtime": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_lastcalculatedtime = n.getDateValue(); },
            "msdyn_msdyn_incidenttype_incident_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_incident_IncidentType = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_knowledgearticle": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_knowledgearticle = n.getCollectionOfObjectValues<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_actual_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_actual_IncidentType = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType = n.getCollectionOfObjectValues<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype = n.getCollectionOfObjectValues<Msdyn_entitlementapplication>(createMsdyn_entitlementapplicationFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType = n.getCollectionOfObjectValues<Msdyn_incidenttypecharacteristic>(createMsdyn_incidenttypecharacteristicFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType = n.getCollectionOfObjectValues<Msdyn_incidenttypeproduct>(createMsdyn_incidenttypeproductFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType = n.getCollectionOfObjectValues<Msdyn_incidenttyperecommendationresult>(createMsdyn_incidenttyperecommendationresultFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge = n.getCollectionOfObjectValues<Msdyn_incidenttyperecommendationresult>(createMsdyn_incidenttyperecommendationresultFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType = n.getCollectionOfObjectValues<Msdyn_incidenttyperesolution>(createMsdyn_incidenttyperesolutionFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType = n.getCollectionOfObjectValues<Msdyn_incidenttypeservice>(createMsdyn_incidenttypeserviceFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType = n.getCollectionOfObjectValues<Msdyn_incidenttypeservicetask>(createMsdyn_incidenttypeservicetaskFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType = n.getCollectionOfObjectValues<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType = n.getCollectionOfObjectValues<Msdyn_quotebookingincident>(createMsdyn_quotebookingincidentFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType = n.getCollectionOfObjectValues<Msdyn_workorderincident>(createMsdyn_workorderincidentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_name = n.getStringValue(); },
            "msdyn_resolutionrequiredonwocompletion": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_resolutionrequiredonwocompletion = n.getBooleanValue(); },
            "msdyn_suggestedduration": (o, n) => { (o as unknown as Msdyn_incidenttype).msdyn_suggestedduration = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_incidenttype).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_incidenttype).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_incidenttype).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_incidenttype).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_incidenttype).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_incidenttype).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_incidenttype).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_incidenttype).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_incidenttype).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_incidenttype).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_copyincidentitemstoagreement property value. 
     * @returns a boolean
     */
    public get msdyn_copyincidentitemstoagreement() {
        return this._msdyn_copyincidentitemstoagreement;
    };
    /**
     * Sets the msdyn_copyincidentitemstoagreement property value. 
     * @param value Value to set for the msdyn_copyincidentitemstoagreement property.
     */
    public set msdyn_copyincidentitemstoagreement(value: boolean | undefined) {
        this._msdyn_copyincidentitemstoagreement = value;
    };
    /**
     * Gets the msdyn_defaultworkordertype property value. 
     * @returns a msdyn_workordertype
     */
    public get msdyn_defaultworkordertype() {
        return this._msdyn_defaultworkordertype;
    };
    /**
     * Sets the msdyn_defaultworkordertype property value. 
     * @param value Value to set for the msdyn_defaultworkordertype property.
     */
    public set msdyn_defaultworkordertype(value: Msdyn_workordertype | undefined) {
        this._msdyn_defaultworkordertype = value;
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
     * Gets the msdyn_incidenttype_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_incidenttype_Annotations() {
        return this._msdyn_incidenttype_Annotations;
    };
    /**
     * Sets the msdyn_incidenttype_Annotations property value. 
     * @param value Value to set for the msdyn_incidenttype_Annotations property.
     */
    public set msdyn_incidenttype_Annotations(value: Annotation[] | undefined) {
        this._msdyn_incidenttype_Annotations = value;
    };
    /**
     * Gets the msdyn_incidenttype_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_incidenttype_AsyncOperations() {
        return this._msdyn_incidenttype_AsyncOperations;
    };
    /**
     * Sets the msdyn_incidenttype_AsyncOperations property value. 
     * @param value Value to set for the msdyn_incidenttype_AsyncOperations property.
     */
    public set msdyn_incidenttype_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_incidenttype_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_incidenttype_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_incidenttype_BulkDeleteFailures() {
        return this._msdyn_incidenttype_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_incidenttype_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_incidenttype_BulkDeleteFailures property.
     */
    public set msdyn_incidenttype_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_incidenttype_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_incidenttype_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_incidenttype_DuplicateBaseRecord() {
        return this._msdyn_incidenttype_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_incidenttype_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_incidenttype_DuplicateBaseRecord property.
     */
    public set msdyn_incidenttype_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_incidenttype_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_incidenttype_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_incidenttype_DuplicateMatchingRecord() {
        return this._msdyn_incidenttype_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_incidenttype_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_incidenttype_DuplicateMatchingRecord property.
     */
    public set msdyn_incidenttype_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_incidenttype_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_incidenttype_knowledgebaserecord property value. 
     * @returns a knowledgebaserecord
     */
    public get msdyn_incidenttype_knowledgebaserecord() {
        return this._msdyn_incidenttype_knowledgebaserecord;
    };
    /**
     * Sets the msdyn_incidenttype_knowledgebaserecord property value. 
     * @param value Value to set for the msdyn_incidenttype_knowledgebaserecord property.
     */
    public set msdyn_incidenttype_knowledgebaserecord(value: Knowledgebaserecord[] | undefined) {
        this._msdyn_incidenttype_knowledgebaserecord = value;
    };
    /**
     * Gets the msdyn_incidenttype_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_incidenttype_MailboxTrackingFolders() {
        return this._msdyn_incidenttype_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_incidenttype_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_incidenttype_MailboxTrackingFolders property.
     */
    public set msdyn_incidenttype_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_incidenttype_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_incidenttype_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_incidenttype_PrincipalObjectAttributeAccesses() {
        return this._msdyn_incidenttype_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_incidenttype_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_incidenttype_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_incidenttype_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_incidenttype_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_incidenttype_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_incidenttype_ProcessSession() {
        return this._msdyn_incidenttype_ProcessSession;
    };
    /**
     * Sets the msdyn_incidenttype_ProcessSession property value. 
     * @param value Value to set for the msdyn_incidenttype_ProcessSession property.
     */
    public set msdyn_incidenttype_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_incidenttype_ProcessSession = value;
    };
    /**
     * Gets the msdyn_incidenttype_requirementgroup_incident property value. 
     * @returns a msdyn_incidenttype_requirementgroup
     */
    public get msdyn_incidenttype_requirementgroup_incident() {
        return this._msdyn_incidenttype_requirementgroup_incident;
    };
    /**
     * Sets the msdyn_incidenttype_requirementgroup_incident property value. 
     * @param value Value to set for the msdyn_incidenttype_requirementgroup_incident property.
     */
    public set msdyn_incidenttype_requirementgroup_incident(value: Msdyn_incidenttype_requirementgroup[] | undefined) {
        this._msdyn_incidenttype_requirementgroup_incident = value;
    };
    /**
     * Gets the msdyn_incidenttype_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_incidenttype_SyncErrors() {
        return this._msdyn_incidenttype_SyncErrors;
    };
    /**
     * Sets the msdyn_incidenttype_SyncErrors property value. 
     * @param value Value to set for the msdyn_incidenttype_SyncErrors property.
     */
    public set msdyn_incidenttype_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_incidenttype_SyncErrors = value;
    };
    /**
     * Gets the msdyn_incidenttypeid property value. 
     * @returns a string
     */
    public get msdyn_incidenttypeid() {
        return this._msdyn_incidenttypeid;
    };
    /**
     * Sets the msdyn_incidenttypeid property value. 
     * @param value Value to set for the msdyn_incidenttypeid property.
     */
    public set msdyn_incidenttypeid(value: string | undefined) {
        this._msdyn_incidenttypeid = value;
    };
    /**
     * Gets the msdyn_lastcalculatedtime property value. 
     * @returns a Date
     */
    public get msdyn_lastcalculatedtime() {
        return this._msdyn_lastcalculatedtime;
    };
    /**
     * Sets the msdyn_lastcalculatedtime property value. 
     * @param value Value to set for the msdyn_lastcalculatedtime property.
     */
    public set msdyn_lastcalculatedtime(value: Date | undefined) {
        this._msdyn_lastcalculatedtime = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_incident_IncidentType property value. 
     * @returns a incident
     */
    public get msdyn_msdyn_incidenttype_incident_IncidentType() {
        return this._msdyn_msdyn_incidenttype_incident_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_incident_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_incident_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_incident_IncidentType(value: Incident[] | undefined) {
        this._msdyn_msdyn_incidenttype_incident_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get msdyn_msdyn_incidenttype_knowledgearticle() {
        return this._msdyn_msdyn_incidenttype_knowledgearticle;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_knowledgearticle property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_knowledgearticle property.
     */
    public set msdyn_msdyn_incidenttype_knowledgearticle(value: Knowledgearticle[] | undefined) {
        this._msdyn_msdyn_incidenttype_knowledgearticle = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_actual_IncidentType property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_incidenttype_msdyn_actual_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_actual_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_actual_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_actual_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_actual_IncidentType(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_actual_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType property value. 
     * @returns a msdyn_agreementbookingincident
     */
    public get msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType(value: Msdyn_agreementbookingincident[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype property value. 
     * @returns a msdyn_entitlementapplication
     */
    public get msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype() {
        return this._msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype(value: Msdyn_entitlementapplication[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType property value. 
     * @returns a msdyn_incidenttypecharacteristic
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType(value: Msdyn_incidenttypecharacteristic[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType property value. 
     * @returns a msdyn_incidenttypeproduct
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType(value: Msdyn_incidenttypeproduct[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType property value. 
     * @returns a msdyn_incidenttyperecommendationresult
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType(value: Msdyn_incidenttyperecommendationresult[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge property value. 
     * @returns a msdyn_incidenttyperecommendationresult
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge(value: Msdyn_incidenttyperecommendationresult[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType property value. 
     * @returns a msdyn_incidenttyperesolution
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType(value: Msdyn_incidenttyperesolution[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType property value. 
     * @returns a msdyn_incidenttypeservice
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType(value: Msdyn_incidenttypeservice[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType property value. 
     * @returns a msdyn_incidenttypeservicetask
     */
    public get msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType(value: Msdyn_incidenttypeservicetask[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType property value. 
     * @returns a msdyn_iotalert
     */
    public get msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType(value: Msdyn_iotalert[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType property value. 
     * @returns a msdyn_quotebookingincident
     */
    public get msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType(value: Msdyn_quotebookingincident[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType = value;
    };
    /**
     * Gets the msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType property value. 
     * @returns a msdyn_workorderincident
     */
    public get msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType() {
        return this._msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType;
    };
    /**
     * Sets the msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType property value. 
     * @param value Value to set for the msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType property.
     */
    public set msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType(value: Msdyn_workorderincident[] | undefined) {
        this._msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType = value;
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
     * Gets the msdyn_resolutionrequiredonwocompletion property value. 
     * @returns a boolean
     */
    public get msdyn_resolutionrequiredonwocompletion() {
        return this._msdyn_resolutionrequiredonwocompletion;
    };
    /**
     * Sets the msdyn_resolutionrequiredonwocompletion property value. 
     * @param value Value to set for the msdyn_resolutionrequiredonwocompletion property.
     */
    public set msdyn_resolutionrequiredonwocompletion(value: boolean | undefined) {
        this._msdyn_resolutionrequiredonwocompletion = value;
    };
    /**
     * Gets the msdyn_suggestedduration property value. 
     * @returns a integer
     */
    public get msdyn_suggestedduration() {
        return this._msdyn_suggestedduration;
    };
    /**
     * Sets the msdyn_suggestedduration property value. 
     * @param value Value to set for the msdyn_suggestedduration property.
     */
    public set msdyn_suggestedduration(value: number | undefined) {
        this._msdyn_suggestedduration = value;
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
        writer.writeStringValue("_msdyn_defaultworkordertype_value", this._msdyn_defaultworkordertype_value);
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
        writer.writeBooleanValue("msdyn_copyincidentitemstoagreement", this.msdyn_copyincidentitemstoagreement);
        writer.writeObjectValue<Msdyn_workordertype>("msdyn_defaultworkordertype", this.msdyn_defaultworkordertype);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_incidenttype_Annotations", this.msdyn_incidenttype_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_incidenttype_AsyncOperations", this.msdyn_incidenttype_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_incidenttype_BulkDeleteFailures", this.msdyn_incidenttype_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_incidenttype_DuplicateBaseRecord", this.msdyn_incidenttype_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_incidenttype_DuplicateMatchingRecord", this.msdyn_incidenttype_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Knowledgebaserecord>("msdyn_incidenttype_knowledgebaserecord", this.msdyn_incidenttype_knowledgebaserecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_incidenttype_MailboxTrackingFolders", this.msdyn_incidenttype_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_incidenttype_PrincipalObjectAttributeAccesses", this.msdyn_incidenttype_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_incidenttype_ProcessSession", this.msdyn_incidenttype_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttype_requirementgroup>("msdyn_incidenttype_requirementgroup_incident", this.msdyn_incidenttype_requirementgroup_incident);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_incidenttype_SyncErrors", this.msdyn_incidenttype_SyncErrors);
        writer.writeStringValue("msdyn_incidenttypeid", this.msdyn_incidenttypeid);
        writer.writeDateValue("msdyn_lastcalculatedtime", this.msdyn_lastcalculatedtime);
        writer.writeCollectionOfObjectValues<Incident>("msdyn_msdyn_incidenttype_incident_IncidentType", this.msdyn_msdyn_incidenttype_incident_IncidentType);
        writer.writeCollectionOfObjectValues<Knowledgearticle>("msdyn_msdyn_incidenttype_knowledgearticle", this.msdyn_msdyn_incidenttype_knowledgearticle);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_incidenttype_msdyn_actual_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_actual_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingincident>("msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_entitlementapplication>("msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype", this.msdyn_msdyn_incidenttype_msdyn_entitlementapplication_incidenttype);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypecharacteristic>("msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypeproduct>("msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttyperecommendationresult>("msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttyperecommendationresult>("msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge", this.msdyn_msdyn_incidenttype_msdyn_incidenttyperecommendationresult_IncidentTypeForMerge);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttyperesolution>("msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypeservice>("msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypeservicetask>("msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_iotalert>("msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_iotalert_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingincident>("msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_quotebookingincident_IncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType", this.msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType);
        writer.writeCollectionOfObjectValues<Msdyn_workorderincident>("msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType", this.msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_resolutionrequiredonwocompletion", this.msdyn_resolutionrequiredonwocompletion);
        writer.writeNumberValue("msdyn_suggestedduration", this.msdyn_suggestedduration);
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
